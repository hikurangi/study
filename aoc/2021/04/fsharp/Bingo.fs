module Bingo

open System

type Square = { Number: int; Drawn: bool }

let splitOn (divider: string) (input: string) =
    input.Split(divider, StringSplitOptions.RemoveEmptyEntries)

let parseMoves =
    splitOn "\n"
    >> Seq.head
    >> splitOn ","
    >> Seq.map int

let parseSquare n = { Number = n; Drawn = false }

let parseBoard =
    Seq.collect (
        splitOn " "
        >> Seq.map (int >> parseSquare)
    )

let parseBoards =
    splitOn "\n"
    >> Seq.tail
    >> Seq.chunkBySize 5
    >> Seq.map parseBoard

let hasWon board = false
let score board = 0
