module SonarSweep

let parseInput (depths: string) = depths.Trim().Split '\n' |> Seq.map int
let isIncrease (a, b) = a - b < 0

let countIncreases =
    Seq.pairwise
    >> Seq.filter isIncrease
    >> Seq.length

let windowed =
    function
    | n when n < 2 -> id
    | n -> Seq.windowed n >> Seq.map (Seq.reduce (+))

let sweep' n =
    parseInput >> windowed n >> countIncreases

let sweep = sweep' 1
let windowedSweep = sweep' 3
