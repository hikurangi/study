module Pangram

let alphabet = Set.ofSeq [ 'a' .. 'z' ]

let isPangram input =
    input
    |> Seq.map System.Char.ToLowerInvariant
    |> Set.ofSeq
    |> Set.isSubset alphabet
