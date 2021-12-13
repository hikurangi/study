module BinaryDiagnostic

type CharCount = char * int

let parseReport (report: string) =
    report.Trim().Split('\n')
    |> Seq.map (fun s -> s.Trim())

let binaryStringToDecimal str = System.Convert.ToInt32(str, 2)

let getPowerConsumption (discriminator: (CharCount -> int) -> seq<CharCount> -> CharCount) =
    Seq.transpose
    >> Seq.map (Seq.countBy id >> discriminator snd >> fst)
    >> System.String.Concat
    >> binaryStringToDecimal

let gammaRate =
    parseReport >> getPowerConsumption Seq.maxBy

let epsilonRate =
    parseReport >> getPowerConsumption Seq.minBy

let hasDuplicates s =
    s |> Seq.length <> (s |> Set |> Seq.length)

let getGasRate discriminator tiebreaker report =
    let rec getGasRate' str idx data =
        match data |> Seq.length with
        | 0 -> failwith "no values left!"
        | 1 -> data |> Seq.exactlyOne |> binaryStringToDecimal
        | _ -> // will never be negative
            let meetsCriteriaAtThisIndex =
                data
                |> Seq.countBy (Seq.item idx)
                |> fun s ->
                    (if s |> Seq.map snd |> hasDuplicates then
                         tiebreaker
                     else
                         s |> discriminator snd |> fst)

            let matchedData =
                data
                |> Seq.filter (fun i -> i |> Seq.item idx = meetsCriteriaAtThisIndex)

            getGasRate' ((meetsCriteriaAtThisIndex |> string) + str) (idx + 1) matchedData

    getGasRate' "" 0 report

let oxygenGeneratorRating = parseReport >> getGasRate Seq.maxBy '1'
let c02ScrubberRating = parseReport >> getGasRate Seq.minBy '0'
