module Darts

let (|Outer|Middle|Inner|Missed|) (x, y) =
    match (x * x + y * y) |> sqrt with
    | d when d <= 1. -> Inner
    | d when d <= 5. -> Middle
    | d when d <= 10. -> Outer
    | _ -> Missed

let score x y =
    match (x, y) with
    | Inner -> 10
    | Middle -> 5
    | Outer -> 1
    | Missed -> 0