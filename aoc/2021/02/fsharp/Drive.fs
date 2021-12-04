module Drive

open System.Text.RegularExpressions

type Movement =
    | Forward of int
    | Down of int
    | Up of int

type Coordinates = { x: int; y: int }

let lineToMovement input =
    let groups = Regex.Match(input, "(?<direction>\w+)\s+(?<distance>\d+)").Groups
    let direction = (groups.Item "direction").Value
    let distance = (groups.Item "distance").Value |> int

    match direction, distance with
    | _, n when n < 1 -> failwith $"invalid distance '{n}' supplied"
    | "forward", n -> Forward n
    | "down", n -> Down n
    | "up", n -> Up n
    | d, _ -> failwith $"invalid direction '{d}' supplied"

let parseLines deserialiser (input: string) =
    input.Trim().Split('\n') |> Seq.map deserialiser

let drive' position =
    Seq.fold
        (fun s ->
            function
            | Forward n -> { s with x = s.x + n }
            | Down n -> { s with y = s.y + n }
            | Up n -> { s with y = s.y - n })
        position

let drive =
    parseLines lineToMovement
    >> drive' { x = 0; y = 0 }
    >> (fun c -> c.x * c.y)
