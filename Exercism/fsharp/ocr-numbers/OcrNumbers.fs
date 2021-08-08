module OcrNumbers

let convertNumbers input =
    match input |> List.ofSeq with
    | [ " _ "; "| |"; "|_|"; "   " ] -> "0"
    | [ "   "; "  |"; "  |"; "   " ] -> "1"
    | [ " _ "; " _|"; "|_ "; "   " ] -> "2"
    | [ " _ "; " _|"; " _|"; "   " ] -> "3"
    | [ "   "; "|_|"; "  |"; "   " ] -> "4"
    | [ " _ "; "|_ "; " _|"; "   " ] -> "5"
    | [ " _ "; "|_ "; "|_|"; "   " ] -> "6"
    | [ " _ "; "  |"; "  |"; "   " ] -> "7"
    | [ " _ "; "|_|"; "|_|"; "   " ] -> "8"
    | [ " _ "; "|_|"; " _|"; "   " ] -> "9"
    | _ -> "?"

let splitNumbers input =
    if input |> Seq.length = 4
       && input |> Seq.forall (fun r -> r |> Seq.length = 3) then
        convertNumbers input
   // TODO: add clause for separator row style
    else
        let grid =
            input
            |> Seq.map (
                Seq.chunkBySize 3
                >> Seq.map (fun l -> l |> Seq.fold (fun s c -> s + string c) "")
            )

        let charCount = grid |> Seq.item 0 |> Seq.length

        [ 0 .. charCount - 1 ]
        |> Seq.map (
            (fun i ->
                grid
                |> Seq.fold (fun s r -> [ r |> Seq.item i ] |> Seq.append s) Seq.empty)
            >> convertNumbers
        )
        |> System.String.Concat

let convert =
    function
    | i when
        ((i |> Seq.length) % 4 <> 0)
        || (i
            |> Seq.exists (fun it -> (it |> Seq.length) % 3 <> 0))
        ->
        None
    | i -> i |> splitNumbers |> Some
