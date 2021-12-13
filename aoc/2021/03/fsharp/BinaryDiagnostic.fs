module BinaryDiagnostic

type CharCount = char * int

let parseReport (report: string) =
    report.Trim().Split('\n')
    |> Seq.map (fun s -> s.Trim())

let binaryStringToDecimal str = System.Convert.ToInt32(str, 2)

let getPowerConsumption (byCriteria: (CharCount -> int) -> seq<CharCount> -> CharCount) =
    Seq.transpose
    >> Seq.map (Seq.countBy id >> byCriteria snd >> fst)
    >> System.String.Concat
    >> binaryStringToDecimal

let gammaRate =
    parseReport >> getPowerConsumption Seq.maxBy

let epsilonRate =
    parseReport >> getPowerConsumption Seq.minBy

let getGasRate byCriteria defaultBit report =
    let rec getGasRate' str idx data =
        match data |> Seq.length with
        | 0 -> failwith "no values left!"
        | 1 -> data |> Seq.exactlyOne |> binaryStringToDecimal
        | _ ->
            let meetsCriteriaAtThisIndex =
                data
                |> Seq.map (Seq.item idx)
                |> Seq.countBy id // doesn't check for a tie
                |> fun s ->
                    (let values = s |> Seq.map snd
                     let uniqueValuesCount = values |> Set |> Seq.length

                     if values |> Seq.length <> uniqueValuesCount then
                         defaultBit
                     else
                         s |> byCriteria snd |> fst)

            let filteredData =
                data
                |> Seq.filter (fun i -> i |> Seq.item idx = meetsCriteriaAtThisIndex)

            getGasRate' ((meetsCriteriaAtThisIndex |> string) + str) (idx + 1) filteredData

    getGasRate' "" 0 (report |> parseReport)

let oxygenGeneratorRating = getGasRate Seq.maxBy '1'
let c02ScrubberRating = getGasRate Seq.minBy '0'
