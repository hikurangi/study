module Hamming

let distance (strand1: string) (strand2: string): int option =
    if strand1.Length <> strand2.Length then
        None
    else
        (strand1, strand2)
        ||> Seq.fold2 (fun acc it1 it2 -> if it1 <> it2 then acc + 1 else acc) 0
        |> Some