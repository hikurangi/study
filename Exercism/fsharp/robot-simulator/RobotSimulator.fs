module RobotSimulator

type Direction = North | East | South | West
type Turn = Left | Right
type Position = int * int
type Robot = { Direction: Direction; Position: Position }

let create direction position = { Direction = direction; Position = position }

let mapTurns direction =
    direction
    |> (function
    | Left -> [ North; West; South; East; North ]
    | Right -> [ North; East; South; West; North ])
    |> List.pairwise
    |> Map

let turn direction robot =
    { robot with
          Direction = (mapTurns direction).[robot.Direction] }

let offset = function North -> (0, 1) | East -> (1, 0) | South -> (0, -1) | West -> (-1, 0)

let advance { Direction = d; Position = (x, y) } =
    let (x', y') = offset d
    { Direction = d
      Position = (x + x', y + y') }

let mapInstruction = function 'A' -> advance | 'L' -> turn Left | 'R' -> turn Right | i -> failwith $"Invalid instruction '{i}'"

let move instructions robot =
    instructions
    |> Seq.map mapInstruction
    |> Seq.fold (|>) robot