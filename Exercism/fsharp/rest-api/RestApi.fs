module RestApi

open Newtonsoft.Json

type Payees = Map<string, double>

type User =
    { name: string
      owes: Payees
      owed_by: Payees
      balance: double }

type Database = { users: seq<User> }

type UserPayload = { user: string }
type UsersPayload = { users: seq<string> }
type UsersResponse = { users: seq<User> }

type IOUPayload =
    { lender: string
      borrower: string
      amount: double }

type RestApi(database: string) =
    let mutable database =
        database
        |> JsonConvert.DeserializeObject<Database>

    member this.FindByName name (store: Database) =
        store.users |> Seq.find (fun u -> u.name = name)

    member this.FindByNames names (store: Database) =
        store.users
        |> Seq.where (fun u -> names |> Seq.contains u.name)

    member this.Get(url: string) = JsonConvert.SerializeObject database

    member this.Get(url: string, payload: string) =
        let asUsersPayload =
            JsonConvert.DeserializeObject<UsersPayload> payload

        { users = this.FindByNames asUsersPayload.users database }
        |> JsonConvert.SerializeObject

    member this.AddUser payload =
        let asUserPayload =
            JsonConvert.DeserializeObject<UserPayload> payload

        { name = asUserPayload.user
          owes = Map.empty
          owed_by = Map.empty
          balance = 0. }
        |> JsonConvert.SerializeObject

    member this.AddIOU payload =
        let asIOUPayload =
            payload
            |> JsonConvert.DeserializeObject<IOUPayload>

        let lenderName = asIOUPayload.lender
        let borrowerName = asIOUPayload.borrower
        let amount = asIOUPayload.amount

        let existingLender = this.FindByName lenderName database

        let newLoan =
            (borrowerName, (fun v -> defaultArg v 0. + amount |> Some))
            |> existingLender.owed_by.Change

        let newLenderDebt =
            borrowerName
            |> existingLender.owes.TryFind
            |> function
                | Some n when n > 0. -> (borrowerName, (fun v -> defaultArg v 0. - amount |> Some)) |> existingLender.owes.Change
                | Some n when n = 0. -> borrowerName |> existingLender.owes.Remove
                | _ -> existingLender.owes

        let updatedLender =
            { existingLender with
                  owes = newLenderDebt
                  owed_by = newLoan
                  balance = existingLender.balance + amount }

        let existingBorrower = this.FindByName borrowerName database

        let newBorrowerDebt =
            (lenderName, (fun v -> defaultArg v 0. + amount |> Some))
            |> existingBorrower.owes.Change

        let updatedBorrower =
            { existingBorrower with
                  owes = newBorrowerDebt
                  balance = existingBorrower.balance - amount }

        // TODO: properly update!
        database <-
            { database with
                  users =
                      [ updatedLender; updatedBorrower ]
                      |> Seq.sortBy (fun u -> u.name) }

        database |> JsonConvert.SerializeObject

    member this.Post(url: string, payload: string) =
        url
        |> function
            | "/add" -> payload |> this.AddUser
            | "/iou" -> payload |> this.AddIOU
            | _ -> "404"
