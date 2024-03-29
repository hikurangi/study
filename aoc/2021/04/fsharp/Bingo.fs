﻿module Bingo

open System

type Square = { Number: int; Drawn: bool }

let splitOn (divider: string) (input: string) =
    input.Split(divider, StringSplitOptions.RemoveEmptyEntries)

let parseCalls =
    splitOn "\n"
    >> Array.head
    >> splitOn ","
    >> Array.map int
    >> List.ofArray

let parseSquare n = { Number = int n; Drawn = false }

let parseBoard =
    Seq.collect (splitOn " " >> Seq.map parseSquare)

let parseBoards =
    splitOn "\n"
    >> Seq.tail
    >> Seq.chunkBySize 5
    >> Seq.map parseBoard

let hasWinningRow =
    Seq.exists (Seq.forall (fun square -> square.Drawn = true))

let hasWon board =
    let board' =
        board |> Seq.chunkBySize 5 |> Seq.map Seq.ofArray

    board' |> hasWinningRow || board' |> Seq.transpose |> hasWinningRow

type BingoResult =
    | Winners of seq<seq<Square>> * int // needs to give the final call
    | Remaining of seq<seq<Square>> * int

let score (result : BingoResult) =
    let board, winningCall = match result with Winners (a, b) -> a, b | Remaining(a, b) -> a, b
    let board' = board |> Seq.exactlyOne
    
    if board' |> hasWon then
        board'
        |> Seq.fold
            (fun st sq ->
                if sq.Drawn = false then
                    st + sq.Number
                else
                    st)
            0
        |> (*) winningCall
    else
        failwith "Not a winning board"

let call number = // could optimise to not overwrite but don't need the performance yet
    Seq.map (
        Seq.map
            (fun square ->
                { square with
                      Drawn = square.Drawn = true || square.Number = number })
    )
    
let rec runCalls calls prevCall boards =
    match calls, boards |> Seq.filter hasWon with // allows for multiple winners. Is the assumption here that there is always only one winner?
    | [], b when b |> Seq.length < 1 -> Remaining (boards, prevCall) // no winners after final call
    | cH :: cT, b when b |> Seq.length < 1 -> runCalls cT cH (boards |> call cH) // does not win on non-final call
    | _, b -> Winners (b, prevCall)// wins on non-final call
