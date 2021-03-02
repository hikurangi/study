module Clock

let dayInMinutes = 1440

let create hours minutes =
    ((hours * 60) + minutes) % dayInMinutes
    |> function
    | m when m < 0 -> m + dayInMinutes
    | m -> m

let add minutes clock = (clock + minutes) |> create 0

let subtract minutes clock = (clock - minutes) |> create 0

let display clock =
    System.Math.DivRem(clock, 60)
    ||> sprintf "%02i:%02i"