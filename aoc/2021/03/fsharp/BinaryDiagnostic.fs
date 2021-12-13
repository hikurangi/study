module BinaryDiagnostic

type CharCount = char * int

let parseReport (report: string) = report.Trim().Split('\n') |> Seq.map (fun s -> s.Trim())
        
let getRate (byCriteria: (CharCount -> int) -> seq<CharCount> -> CharCount) data =
    [ 0 .. (data |> Seq.head |> Seq.length) - 1 ] // assumes all the same length
    |> Seq.map
        (fun n ->
            data
            |> Seq.map (Seq.item n) // get the nth item of each
            |> Seq.countBy id // add counts to item
            |> byCriteria snd // apply a maxBy/minBy based on the count value
            |> fst) // return just the digit
    |> System.String.Concat
    |> fun v -> System.Convert.ToInt32(v, 2)

let gammaRate = parseReport >> getRate Seq.maxBy
let epsilonRate = parseReport >> getRate Seq.minBy

let oxygenGeneratorRate report = 0