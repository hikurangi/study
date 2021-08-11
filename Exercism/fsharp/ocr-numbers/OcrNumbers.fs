module OcrNumbers

let character = List.ofSeq >> function
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

let row: seq<string> -> string =
    Seq.map (Seq.chunkBySize 3 >> Seq.map System.String) >> Seq.transpose >> Seq.map character >> String.concat ""

let convert = function
    | i when (i |> Seq.length) % 4 <> 0 || i |> Seq.exists (fun it -> (it |> Seq.length) % 3 <> 0) -> None
    | i -> i |> Seq.chunkBySize 4 |> Seq.map row |> String.concat "," |> Some
