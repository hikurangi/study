module SonarSweep

let isIncrease (a, b) = a - b < 0

let sweep (depths : string) =
    depths.Trim().Split '\n'
    |> Seq.map int
    |> Seq.pairwise
    |> Seq.filter isIncrease
    |> Seq.length

let windowedSweep (depths : string) =
    depths.Trim().Split '\n'
    |> Seq.map int
    |> Seq.windowed 3
    |> Seq.map (Seq.reduce (+))
    |> Seq.pairwise
    |> Seq.filter isIncrease
    |> Seq.length