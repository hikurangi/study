module Pangram

let isPangram input =
    input
    |> Seq.map System.Char.ToLowerInvariant
    |> Set.ofSeq
    |> Set.isSubset (Set.ofSeq [ 'a' .. 'z' ])
