module RestApi

open Newtonsoft.Json
open Newtonsoft.Json.Serialization

type Ledger = Map<string, double>

type User =
    { Name: string
      Owes: Ledger
      OwedBy: Ledger
      Balance: double }

type UserAssetsAndLiabilities =
    { Assets: double
      Liabilities: double
      Balance: double }

type Exchange =
    { Lender: UserAssetsAndLiabilities
      Borrower: UserAssetsAndLiabilities }

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

    let zeroToNone =
        function
        | v when v <= 0.0 -> None
        | v -> Some v

    let defaultToZero v = defaultArg v 0.0

    let calculateExchange lenderUser borrowerUser amount =
        let updatedLenderPosition =
            lenderUser.Assets - lenderUser.Liabilities
            + amount

        let updatedBorrowerPosition =
            borrowerUser.Assets
            - borrowerUser.Liabilities
            - amount

        let updatedLenderAssets =
            match updatedLenderPosition with
            | v when v > 0.0 -> v
            | _ -> 0.0

        let updatedLenderLiabilities =
            match updatedLenderPosition with
            | v when v > 0.0 -> 0.0
            | v -> v |> abs

        let updatedLenderBalance = lenderUser.Balance + amount

        let updatedBorrowerAssets =
            match updatedBorrowerPosition with
            | v when v > 0.0 -> v
            | _ -> 0.0

        let updatedBorrowerLiabilities =
            match updatedBorrowerPosition with
            | v when v > 0.0 -> 0.0
            | v -> v |> abs

        let updatedBorrowerBalance = borrowerUser.Balance - amount

        { Lender =
              { Assets = updatedLenderAssets
                Liabilities = updatedLenderLiabilities
                Balance = updatedLenderBalance }
          Borrower =
              { Assets = updatedBorrowerAssets
                Liabilities = updatedBorrowerLiabilities
                Balance = updatedBorrowerBalance } }

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
        let amount = iou.Amount

        let lenderAssetsAndLiabilities =
            { Assets =
                  borrowerUser.Name
                  |> lenderUser.OwedBy.TryFind
                  |> defaultToZero
              Liabilities =
                  borrowerUser.Name
                  |> lenderUser.Owes.TryFind
                  |> defaultToZero
              Balance = lenderUser.Balance }

        let borrowerAssetsAndLiabilities =
            { Assets =
                  lenderUser.Name
                  |> borrowerUser.OwedBy.TryFind
                  |> defaultToZero
              Liabilities =
                  lenderUser.Name
                  |> borrowerUser.Owes.TryFind
                  |> defaultToZero
              Balance = borrowerUser.Balance }

        let exchange =
            calculateExchange lenderAssetsAndLiabilities borrowerAssetsAndLiabilities amount

        let lenderLiabilities = exchange.Lender.Liabilities
        let lenderAssets = exchange.Lender.Assets

        let borrowerLiabilities = exchange.Borrower.Liabilities
        let borrowerAssets = exchange.Borrower.Assets

        let updatedLenderUser =
            { lenderUser with
                  Balance = exchange.Lender.Balance
                  Owes =
                      if lenderLiabilities > 0.0 then
                          lenderUser.Owes.Add(borrowerUser.Name, lenderLiabilities)
                      else
                          borrowerUser.Name |> lenderUser.Owes.Remove
                  OwedBy =
                      if lenderAssets > 0.0 then
                          lenderUser.OwedBy.Add(borrowerUser.Name, lenderAssets)
                      else
                          borrowerUser.Name |> lenderUser.OwedBy.Remove }

        let updatedBorrowerUser =
            { borrowerUser with
                  Balance = exchange.Borrower.Balance
                  Owes =
                      if borrowerLiabilities > 0.0 then
                          borrowerUser.Owes.Add(lenderUser.Name, borrowerLiabilities)
                      else
                          lenderUser.Name |> borrowerUser.Owes.Remove
                  OwedBy =
                      if borrowerAssets > 0.0 then
                          borrowerUser.OwedBy.Add(lenderUser.Name, borrowerAssets)
                      else
                          lenderUser.Name |> borrowerUser.OwedBy.Remove }

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
