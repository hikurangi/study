module Accumulate

let cons x y = x :: y

let accumulate func input =
    let rec iterate acc =
        function
        | [] -> acc
        | h :: t -> iterate (func h :: acc) t

    iterate [] input |> List.rev
