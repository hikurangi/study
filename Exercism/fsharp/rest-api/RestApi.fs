module RestApi

open Newtonsoft.Json

type Payees = Map<string, double>

type User =
    { [<JsonProperty("name")>]
      Name: string
      [<JsonProperty("owes")>]
      Owes: Payees
      [<JsonProperty("owed_by")>]
      OwedBy: Payees
      [<JsonProperty("balance")>]
      Balance: double }

type Database =
    { [<JsonProperty("users")>]
      Users: seq<User> }

type UserPayload =
    { [<JsonProperty("user")>]
      User: string }

type UsersPayload =
    { [<JsonProperty("users")>]
      Users: seq<string> }

type UsersResponse =
    { [<JsonProperty("users")>]
      Users: seq<User> }

type IOUPayload =
    { [<JsonProperty("lender")>]
      Lender: string
      [<JsonProperty("borrower")>]
      Borrower: string
      [<JsonProperty("amount")>]
      Amount: double }

let deserialize<'a> = JsonConvert.DeserializeObject<'a>
let serialize = JsonConvert.SerializeObject

type RestApi(database: string) =
    let mutable _database = database |> deserialize<Database>

    member this.FindByName name (store: Database) =
        store.Users |> Seq.find (fun u -> u.Name = name)

    member this.FindByNames names (store: Database) =
        store.Users
        |> Seq.where (fun u -> names |> Seq.contains u.Name)

    member this.Get(url: string) = _database |> serialize

    member this.Get(url: string, payload: string) =
        { Users =
              _database
              |> this.FindByNames (deserialize<UsersPayload> payload).Users }
        |> serialize

    member this.AddUser payload =
        { Name = (payload |> deserialize<UserPayload>).User
          Owes = Map.empty
          OwedBy = Map.empty
          Balance = 0. }
        |> serialize

    member this.AddIOU payload =
        let asIOUPayload = payload |> deserialize<IOUPayload>

        let lenderName = asIOUPayload.Lender
        let borrowerName = asIOUPayload.Borrower
        let amount = asIOUPayload.Amount

        let existingLender = this.FindByName lenderName _database

        let newLoan =
            (borrowerName, (fun v -> defaultArg v 0. + amount |> Some))
            |> existingLender.OwedBy.Change

        let newLenderDebt =
            borrowerName
            |> existingLender.Owes.TryFind
            |> function
                | Some n when n > 0. ->
                    (borrowerName, (fun v -> defaultArg v 0. - amount |> Some))
                    |> existingLender.Owes.Change
                | Some n when n = 0. -> borrowerName |> existingLender.Owes.Remove
                | _ -> existingLender.Owes

        let updatedLender =
            { existingLender with
                  Owes = newLenderDebt
                  OwedBy = newLoan
                  Balance = existingLender.Balance + amount }

        let existingBorrower = this.FindByName borrowerName _database

        let newBorrowerDebt =
            (lenderName, (fun v -> defaultArg v 0. + amount |> Some))
            |> existingBorrower.Owes.Change

        let updatedBorrower =
            { existingBorrower with
                  Owes = newBorrowerDebt
                  Balance = existingBorrower.Balance - amount }

        // TODO: properly update!
        _database <-
            { _database with
                  Users =
                      [ updatedLender; updatedBorrower ]
                      |> Seq.sortBy (fun u -> u.Name) }

        _database |> serialize

    member this.Post(url: string, payload: string) =
        url
        |> function
            | "/add" -> payload |> this.AddUser
            | "/iou" -> payload |> this.AddIOU
            | _ -> "404"
