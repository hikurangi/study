module BinaryDiagnostic
type CharCount = char * int

let rate (counter: (CharCount -> int) -> seq<CharCount> -> CharCount) (report: string) =
    let parsedReport = report.Trim().Split('\n') |> Seq.map (fun s -> s.Trim())

    [ 0 .. (parsedReport |> Seq.head |> Seq.length) - 1 ] // assumes all the same length
    |> Seq.map
        (fun n ->
            parsedReport
            |> Seq.map (Seq.item n) // get the nth item
            |> Seq.countBy id // add counts to item
            |> counter snd // apply a maxBy/minBy based on the count value
            |> (fun (k, _v) -> k)) // return just the digit
    |> System.String.Concat
    |> fun v -> System.Convert.ToInt32(v, 2)

let gammaRate = rate Seq.maxBy
let epsilonRate = rate Seq.minBy
