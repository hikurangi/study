module OcrNumbers
open System

let (|InvalidSequence|_|) i =
    match (i |> Seq.length) % 4 <> 0
          || i
             |> Seq.exists (fun it -> (it |> Seq.length) % 3 <> 0) with
    | true -> Some i
    | false -> None

let (|SingleCharacter|_|) i =
    match i |> Seq.length = 4
          && i |> Seq.forall (fun r -> r |> Seq.length = 3) with
    | true -> Some i
    | false -> None

let (|Multiline|_|) i =
    match i |> Seq.length > 4 with
    | true -> Some i
    | false -> None

let parse input =
    match input |> Seq.take 3 |> String.Concat with
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

let processRow input =
    let grid =
        input
        |> Seq.map (
            Seq.chunkBySize 3
            >> Seq.map (
                Seq.map Char.ToString
                >> String.Concat
            )
        )

    let charCount = grid |> Seq.item 0 |> Seq.length

    [ 0 .. charCount - 1 ]
    |> Seq.map (
        (fun i ->
            grid
            |> Seq.fold (fun s r -> [ r |> Seq.item i ] |> Seq.append s) Seq.empty)
        >> parse
    )
    |> String.Concat

let processMultiline input =
    let chunkedInput = input |> Seq.chunkBySize 4
    let asGrid = chunkedInput |> Seq.map processRow
    String.Join(',', asGrid)

let convert = function
    | InvalidSequence _ -> None
    | SingleCharacter i -> i |> parse |> Some
    | Multiline i -> i |> processMultiline |> Some
    | i -> i |> processRow |> Some
