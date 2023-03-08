module Bowling

type Frame =
    | Strike of int * int * int
    | Spare of int * int * int
    | Open of int * int

type Game = Frame * Frame * Frame * Frame * Frame * Frame * Frame * Frame * Frame * Frame

let newGame () =
    failwith "You need to implement this function."

let roll (pins: int) (rolls: seq<int>) =
    failwith "You need to implement this function."

let score (game: Game) =
    failwith "You need to implement this function."