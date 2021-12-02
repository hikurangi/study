module SonarSweep

let parseInput (depths: string) = depths.Trim().Split '\n' |> Seq.map int
let isIncrease (a, b) = a - b < 0
let countIncreases =
    Seq.pairwise
    >> Seq.filter isIncrease
    >> Seq.length

let sweep' toWindows = parseInput >> toWindows >> countIncreases
let summedWindow =
    function
    | n when n < 2 -> id
    | n -> Seq.windowed n >> Seq.map (Seq.reduce (+))

let sweep = sweep' (summedWindow 1)
let windowedSweep = sweep' (summedWindow 3)
