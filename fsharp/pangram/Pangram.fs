module Pangram

let isPangram (input: string): bool =
    input
    |> Seq.toList
    |> List.map System.Char.ToLowerInvariant
    |> Set.ofList
    |> Set.isSubset (Set.ofList [ 'a' .. 'z' ])
