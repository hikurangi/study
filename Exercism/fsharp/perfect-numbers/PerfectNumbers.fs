module PerfectNumbers

type Classification =
    | Perfect
    | Abundant
    | Deficient

let classify =
    function
    | n when n < 1 -> None
    | n ->
        [ for i in 1 .. n / 2 do if n % i = 0 then i ]
        |> Seq.sum
        |> (function
        | s when s < n -> Deficient
        | s when s > n -> Abundant
        | _ -> Perfect)
        |> Some
