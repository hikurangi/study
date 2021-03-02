module Etl

let transform scoresWithLetters =
    scoresWithLetters
    |> Map.toSeq
    |> Seq.collect (fun (n, l) -> Seq.map (fun c -> (System.Char.ToLowerInvariant c, n)) l)
    |> Map.ofSeq
