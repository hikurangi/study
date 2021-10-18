module RestApi

open Newtonsoft.Json
open Newtonsoft.Json.Serialization

let snakeCaseContractResolver = DefaultContractResolver()
snakeCaseContractResolver.NamingStrategy <- SnakeCaseNamingStrategy()

let serializerSettings = JsonSerializerSettings()
serializerSettings.ContractResolver <- snakeCaseContractResolver

let deserialize<'a> s = JsonConvert.DeserializeObject<'a>(s, serializerSettings)
let serialize o = JsonConvert.SerializeObject(o, serializerSettings)

type Ledger = Map<string, float>
type User = { Name: string; Owes: Ledger; OwedBy: Ledger; Balance: float }

type AddUsersDTO = { User: string }
type GetUsersDTO = { Users: string seq }
type DatabaseDTO = { Users: User seq }
type IOUDTO = { Lender: string; Borrower: string; Amount: float }

type Application(database: DatabaseDTO) =
    let mutable _users = database.Users

    let defaultToZero v = defaultArg v 0.0

    let updateUser existingP1 p2Name balance p1Total =
        let owedBy =
            if p1Total > 0.0 then
                existingP1.OwedBy.Add(p2Name, p1Total)
            else
                existingP1.OwedBy.Remove p2Name

        let owes =
            if p1Total < 0.0 then
                existingP1.Owes.Add(p2Name, p1Total |> abs)
            else
                existingP1.Owes.Remove p2Name

        { existingP1 with
              Balance = balance
              OwedBy = owedBy
              Owes = owes }

    let getBalance p1 p2 amount =
        (p2.Name |> p1.OwedBy.TryFind |> defaultToZero)
        - (p2.Name |> p1.Owes.TryFind |> defaultToZero)
        + amount

    member _.InitializeUser(user: AddUsersDTO) =
        { Name = user.User
          Owes = Map.empty
          OwedBy = Map.empty
          Balance = 0.0 }

    member _.GetUsers(search: GetUsersDTO) =
        { Users =
              _users
              |> Seq.filter (fun u -> search.Users |> Seq.contains u.Name) }

    member _.GetAllUsers = { Users = _users }

    member _.GetUser search =
        _users
        |> Seq.tryFind (fun u -> search = u.Name)
        |> (function
        | Some u -> u
        | None -> failwith "User not found")

    member _.GetUpdatedUsers(additionalUsers: User seq) =
        _users
        |> Seq.filter
            (fun u ->
                additionalUsers
                |> Seq.exists (fun u' -> u.Name = u'.Name)
                |> not)
        |> Seq.append additionalUsers

    member this.IOU(iou: IOUDTO) =

        let amount = iou.Amount
        
        let lenderUser = iou.Lender |> this.GetUser
        let borrowerUser = iou.Borrower |> this.GetUser

        let updatedLenderUser =
            getBalance lenderUser borrowerUser amount
            |> updateUser lenderUser borrowerUser.Name (lenderUser.Balance + amount)

        let updatedBorrowerUser =
            getBalance borrowerUser lenderUser -amount
            |> updateUser borrowerUser lenderUser.Name (borrowerUser.Balance - amount)

        { Users =
              [ updatedLenderUser
                updatedBorrowerUser ]
              |> Seq.sortBy (fun u -> u.Name) }

type RestApi(database) =
    let _app =
        database
        |> deserialize<DatabaseDTO>
        |> Application

    member _.Get url =
        match url with
        | "/users" -> _app.GetAllUsers |> serialize
        | _ -> "404"

    member _.Get(url: string, payload: string) =
        match url with
        | "/users" ->
            payload
            |> deserialize<GetUsersDTO>
            |> _app.GetUsers
            |> serialize
        | _ -> "404"

    member _.Post(url: string, payload: string) =
        match url with
        | "/add" ->
            payload
            |> deserialize<AddUsersDTO>
            |> _app.InitializeUser
            |> serialize
        | "/iou" ->
            payload
            |> deserialize<IOUDTO>
            |> _app.IOU
            |> serialize
        | _ -> "404"
