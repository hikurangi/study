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

    member this.FindByName name =
        database.users
        |> Seq.find (fun u -> u.name = name)

    member this.FindByNames names =
        database.users
        |> Seq.where (fun u -> names |> Seq.contains u.name)

    member this.Get(url: string) = JsonConvert.SerializeObject database

    member this.Get(url: string, payload: string) =
        let asUsersPayload =
            JsonConvert.DeserializeObject<UsersPayload> payload

        { users = this.FindByNames asUsersPayload.users }
        |> JsonConvert.SerializeObject

    member this.AddUser payload =
        let userPayload =
            JsonConvert.DeserializeObject<UserPayload> payload

        { name = userPayload.user
          owes = Map.empty
          owed_by = Map.empty
          balance = 0. }
        |> JsonConvert.SerializeObject

    member this.UpdateUsersWhenBothZero lender borrower loan =
        [ { lender with
                balance = lender.balance + loan.amount
                owed_by =
                    (borrower.name, (fun v -> defaultArg v 0. + loan.amount |> Some))
                    |> lender.owed_by.Change }
          { borrower with
                balance = borrower.balance - loan.amount
                owes =
                    (lender.name, (fun v -> defaultArg v 0. + loan.amount |> Some))
                    |> borrower.owes.Change } ]

    member this.UpdateUsersWhenLenderOwesBorrower lender borrower loan =
        // subtract loan amount from lender owes
        // subtract loan amount from borrower is owed_by
        let lenderName = lender.name
        let borrowerName = borrower.name
        let updatedLenderOwes =
            (borrowerName, (fun v -> defaultArg v 0. - loan.amount |> Some))
            |> lender.owes.Change

        let updatedLenderOwesBorrowerAmount = updatedLenderOwes.[borrowerName]

        let updatedLenderOwedBy =
            if updatedLenderOwesBorrowerAmount < 0. then
                (borrowerName,
                 (fun v ->
                     defaultArg v 0.
                     + (updatedLenderOwesBorrowerAmount |> abs)
                     |> Some))
                |> lender.owed_by.Change
            else
                lender.owed_by

        let updatedBorrowerOwes =
            if updatedLenderOwesBorrowerAmount < 0. then
                (lender.name,
                 (fun v ->
                     defaultArg v 0.
                     + (updatedLenderOwesBorrowerAmount |> abs)
                     |> Some))
                |> borrower.owes.Change
            else
                borrower.owes

        let updatedBorrowerOwedBy =
            if updatedLenderOwesBorrowerAmount < 0. then
                (lenderName,
                 (fun v ->
                     defaultArg v 0.
                     - updatedLenderOwesBorrowerAmount
                     |> Some))
                |> borrower.owed_by.Change
            else
                borrower.owed_by

        [ { lender with
                balance = lender.balance + loan.amount
                owes =
                    (if updatedLenderOwesBorrowerAmount <= 0. then
                         updatedLenderOwes.Remove borrowerName
                     else
                         updatedLenderOwes)
                owed_by = updatedLenderOwedBy }
          { borrower with
                balance = borrower.balance - loan.amount
                owes = updatedBorrowerOwes
                owed_by =
                    (if updatedLenderOwesBorrowerAmount <= 0. then
                         updatedBorrowerOwedBy.Remove lenderName
                     else
                         updatedBorrowerOwedBy) } ]

    member this.IMPUREUpdateDbUsers users =
        database <- { database with users = users }
        database

    member this.AddIOU payload =
        let iouPayload =
            payload
            |> JsonConvert.DeserializeObject<IOUPayload>

        let lender = this.FindByName iouPayload.lender
        let borrower = this.FindByName iouPayload.borrower

        match lender.owes.ContainsKey borrower.name with
        | true -> this.UpdateUsersWhenLenderOwesBorrower lender borrower iouPayload
        | false -> this.UpdateUsersWhenBothZero lender borrower iouPayload
        |> List.sortBy (fun u -> u.name)
        |> this.IMPUREUpdateDbUsers
        |> JsonConvert.SerializeObject

    member this.Post(url: string, payload: string) =
        url
        |> function
            | "/add" -> payload |> this.AddUser
            | "/iou" -> payload |> this.AddIOU
            | _ -> "404"
