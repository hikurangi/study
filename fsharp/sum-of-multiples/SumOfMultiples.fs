module SumOfMultiples

let sum (numbers: int list) (upperBound: int): int =
    if upperBound = 1 then
        0
    else
        [ 1 .. upperBound - 1 ]
        |> List.filter
            (fun candidate ->
                candidate <> 0
                && (List.exists (fun factor -> factor <> 0 && candidate % factor = 0) numbers))
        |> List.sum

