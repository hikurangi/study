module CarsAssemble

let productionRate = 221.
let productionRatePerHour =
    function
    | s when s > -1 && s <= 4 -> (s |> float) * productionRate * 1.
    | s when s > -1 && s <= 8 -> (s |> float) * productionRate * 0.9
    | s when s > -1 && s <= 9 -> (s |> float) * productionRate * 0.8
    | s when s > -1 && s <= 10 -> (s |> float) * productionRate * 0.77
    | s -> failwith $"Invalid rate {s}"

let workingItemsPerMinute speed =
    (productionRatePerHour speed / 60.)
    |> floor
    |> int
