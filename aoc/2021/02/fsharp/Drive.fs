module Drive

open System.Text.RegularExpressions

type Move = Forward of int | Down of int | Up of int
type Coordinates = { x: int; y: int }
type AimedCoordinates = { x: int; y: int; Aim: int }

let asMove input =
    let groups = Regex.Match(input, "(?<direction>\w+)\s+(?<distance>\d+)").Groups
    
    match (groups.Item "direction").Value, (groups.Item "distance").Value |> int with
    | _, n when n < 1 -> failwith $"invalid distance '{n}' supplied"
    | "forward", n -> Forward n
    | "down", n -> Down n
    | "up", n -> Up n
    | d, _ -> failwith $"invalid direction '{d}' supplied"

let parseLines transformer (input: string) = input.Trim().Split('\n') |> Seq.map transformer

let updateCoordinates (s: Coordinates) =
    function Forward n -> { s with x = s.x + n } | Down n -> { s with y = s.y + n } | Up n -> { s with y = s.y - n }

let updateAimedCoordinates (s: AimedCoordinates) =
    function
    | Forward n -> { s with x = s.x + n; y = s.y + (s.Aim * n) }
    | Down n -> { s with Aim = s.Aim + n }
    | Up n -> { s with Aim = s.Aim - n }

let drive =
    parseLines asMove
    >> Seq.fold updateCoordinates { x = 0; y = 0 }
    >> fun c -> c.x * c.y

let updatedDrive =
    parseLines asMove
    >> Seq.fold updateAimedCoordinates { x = 0; y = 0; Aim = 0 }
    >> fun c -> c.x * c.y
