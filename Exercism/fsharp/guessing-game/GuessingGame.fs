module GuessingGame

let private n = 42

let reply guess =
    match guess - n with
    | g when g < -1 -> "Too low"
    | g when g |> abs = 1 -> "So close"
    | g when g > 1 -> "Too high"
    | _ -> "Correct"