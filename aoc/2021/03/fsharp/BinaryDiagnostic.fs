module BinaryDiagnostic

type CharCount = char * int

let parseReport (report: string) =
    report.Trim().Split('\n')
    |> Seq.map (fun s -> s.Trim())

let getRate (byCriteria: (CharCount -> int) -> seq<CharCount> -> CharCount) =
    Seq.transpose
    >> Seq.map (Seq.countBy id >> byCriteria snd >> fst)
    >> System.String.Concat
    >> fun v -> System.Convert.ToInt32(v, 2)

let gammaRate = parseReport >> getRate Seq.maxBy
let epsilonRate = parseReport >> getRate Seq.minBy

let oxygenGeneratorRating report =
    let parsedReport = report |> parseReport
    // for each item
    // get the most common bit, defaulted to 1 if a tie

    0
