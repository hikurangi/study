module Darts

let (|Outer|Middle|Inner|Missed|) (x, y) =
    let d = pown x 2 + pown y 2 |> sqrt

    if d <= 1. then Inner
    elif d <= 5. then Middle
    elif d <= 10. then Outer
    else Missed

let score (x: double) (y: double): int =
    match (x, y) with
    | Inner -> 10
    | Middle -> 5
    | Outer -> 1
    | Missed -> 0