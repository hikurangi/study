module SpaceAge

[<Measure>]
type second

type Planet =
    | Earth
    | Mercury
    | Venus
    | Mars
    | Jupiter
    | Saturn
    | Uranus
    | Neptune

let yearInSeconds =
    function
    | Mercury -> 7_600_543.82<second>
    | Venus -> 19_414_149.05<second>
    | Earth -> 31_557_600.<second>
    | Mars -> 59_354_032.69<second>
    | Jupiter -> 374_355_659.1<second>
    | Saturn -> 929_292_362.9<second>
    | Uranus -> 2_651_370_019.0<second>
    | Neptune -> 5_200_418_560.0<second>

let age planet (seconds: int64) =
    float seconds / yearInSeconds planet |> float
