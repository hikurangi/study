module OcrNumbers

open System

let parseChar = Seq.take 3 >> String.Concat >> function
    | " _ | ||_|" -> "0"
    | "     |  |" -> "1"
    | " _  _||_ " -> "2"
    | " _  _| _|" -> "3"
    | "   |_|  |" -> "4"
    | " _ |_  _|" -> "5"
    | " _ |_ |_|" -> "6"
    | " _   |  |" -> "7"
    | " _ |_||_|" -> "8"
    | " _ |_| _|" -> "9"
    | _ -> "?"

let parseRow = function
    | i when i |> Seq.length = 4 && i |> Seq.forall (fun r -> r |> Seq.length = 3) -> i |> parseChar
    | i -> i |> Seq.map (Seq.chunkBySize 3 >> Seq.map String) |> Seq.transpose |> Seq.map parseChar |> String.Concat

let parse = function
    | i when i |> Seq.length > 4 -> (',', i |> Seq.chunkBySize 4 |> Seq.map parseRow) |> String.Join
    | i -> i |> parseRow
    
let convert = function
    | i when (i |> Seq.length) % 4 <> 0 || i |> Seq.exists (fun it -> (it |> Seq.length) % 3 <> 0) -> None
    | i -> i |> parse |> Some
