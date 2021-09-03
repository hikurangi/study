module CarsAssemble

let successRate =
    function
    | s when s <= 4 -> 1.
    | s when s <= 8 -> 0.9
    | s when s <= 9 -> 0.8
    | _ -> 0.77

let productionRatePerHour speed =
    221. * float speed * successRate speed

let workingItemsPerMinute speed =
    productionRatePerHour speed / 60. |> int
