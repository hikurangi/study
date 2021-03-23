module SumOfMultiples

let sum numbers upperBound =
    numbers
    |> Seq.filter (fun n -> n > 0)
    |> Seq.collect (fun n -> [ n .. n .. upperBound - 1 ]) // starting from n, move up in increments of n to upperBound - 1
    |> Seq.distinct // guard against any duplicate multiples
    |> Seq.sum