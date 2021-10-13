module RestApi

open Newtonsoft.Json
open Newtonsoft.Json.Serialization

type Ledger = Map<string, double>

type User =
    { Name: string
      Owes: Ledger
      OwedBy: Ledger
      Balance: double }

type AddUsersDTO = { User: string }
type GetUsersDTO = { Users: string seq }
type DatabaseDTO = { Users: User seq }

type IOUDTO =
    { Lender: string
      Borrower: string
      Amount: double }

let snakeCaseContractResolver = DefaultContractResolver()
snakeCaseContractResolver.NamingStrategy <- SnakeCaseNamingStrategy()
let serializerSettings = JsonSerializerSettings()
serializerSettings.ContractResolver <- snakeCaseContractResolver

let deserialize<'a> s =
    JsonConvert.DeserializeObject<'a>(s, serializerSettings)

let serialize o =
    JsonConvert.SerializeObject(o, serializerSettings)

type Database(database: DatabaseDTO) =

    let mutable _users = database.Users

    member this.InitializeUser(user: AddUsersDTO) =
        { Name = user.User
          Owes = Map.empty
          OwedBy = Map.empty
          Balance = 0.0 }

    member this.GetUsers(search: GetUsersDTO) =
        _users
        |> Seq.filter (fun u -> search.Users |> Seq.contains u.Name)
        |> (fun u -> { Users = u })

    member this.GetAllUsers = { Users = _users }

    member this.GetUser(search: string) =
        _users
        |> Seq.tryFind (fun u -> search = u.Name)
        |> (function
        | Some u -> u
        | None -> failwith "User not found")

    member this.GetUpdatedUsers(additionalUsers: User seq) =
        _users
        |> Seq.filter
            (fun u ->
                additionalUsers
                |> Seq.exists (fun u' -> u.Name = u'.Name)
                |> not)
        |> Seq.append additionalUsers

    member this.UpdateUsers(updatedUsers: User seq) = _users <- updatedUsers

    member this.ResolveIOU(iou: IOUDTO) : DatabaseDTO =
        let lenderUser = iou.Lender |> this.GetUser
        let borrowerUser = iou.Borrower |> this.GetUser
        let iouAmount = iou.Amount

        let updatedLenderUserOwedBy =
            lenderUser.OwedBy.Change(
                iou.Borrower,
                (function
                | Some v -> (v + iouAmount) |> Some
                | None -> Some iouAmount)
            )

        let updatedLenderUser =
            { lenderUser with
                  Balance = lenderUser.Balance + iouAmount
                  OwedBy = updatedLenderUserOwedBy }

        let updatedBorrowerUserOwes =
            borrowerUser.Owes.Change(
                iou.Lender,
                (function
                | Some v -> (v - iouAmount) |> Some
                | None -> Some iouAmount)
            )

        let updatedBorrowerUser =
            { borrowerUser with
                  Balance = borrowerUser.Balance - iouAmount
                  Owes = updatedBorrowerUserOwes }

        { Users =
              [ updatedLenderUser
                updatedBorrowerUser ]
              |> Seq.sortBy (fun u -> u.Name) }

type RestApi(database) =
    let _database =
        database |> deserialize<DatabaseDTO> |> Database

    member this.Get(url: string) =
        match url with
        | "/users" -> _database.GetAllUsers |> serialize
        | _ -> "404"

    member this.Get(url: string, payload: string) =
        match url with
        | "/users" ->
            payload
            |> deserialize<GetUsersDTO>
            |> _database.GetUsers
            |> serialize
        | _ -> "404"

    member this.Post(url: string, payload: string) =
        match url with
        | "/add" ->
            payload
            |> deserialize<AddUsersDTO>
            |> _database.InitializeUser
            |> serialize
        | "/iou" ->
            payload
            |> deserialize<IOUDTO>
            |> _database.ResolveIOU
            |> serialize
        | _ -> "404"
