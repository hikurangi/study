module RestApi

open FSharp.Data

type Debts = Map<string, decimal>
type Database =
    JsonProvider<"""{"users":[{"name":"Adam","owes":{},"owed_by":{},"balance":0.0},{"name":"Bob","owes":{},"owed_by":{},"balance":0.0}]}""">

type UserPayload = JsonProvider<"""{"name":"Bob"}""">

let serialize (json: JsonValue) =
    json.ToString JsonSaveOptions.DisableFormatting

type RestApi(database: string) =
    let mutable _database = database |> Database.Parse
    let addUser (p: UserPayload) = Database.User(name = p.name, owes = Map.empty, owed_by = Map.empty, balance = 0.0m)
        
    member this.Get(url: string) =
        match url with
        | "/users" -> _database.JsonValue |> serialize
        | _ -> "404"

    member this.Get(url: string, payload: string) =
        failwith "You need to implement this function."

    member this.Post(url: string, payload: string) =
        match url with
        | "/add" -> payload |> UserPayload.Parse |> addUser
