module Accumulate

let accumulate func input =
    let rec iterate acc =
        function
        | [] -> acc
        | h :: t -> iterate (func h :: acc) t

    iterate [] input |> List.rev
