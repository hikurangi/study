module Isogram

open System

let isIsogram (str: string): bool =
    str
    |> Seq.countBy Char.ToLowerInvariant
    |> Seq.exists (fun (k, v) -> v > 1 && Char.IsLetter k)
    |> not
