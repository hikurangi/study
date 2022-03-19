module ScaleGenerator
    
let sharpKeys = ["a"; "C"; "e"; "G"; "b"; "D"; "f#"; "A"; "c#"; "E"; "g#"; "B"; "d#"; "F#"]
let chromaticScaleInSharps = [ "C"; "C#"; "D"; "D#"; "E"; "F"; "F#"; "G"; "G#"; "A"; "A#"; "B" ]
let chromaticScaleInFlats = [ "Bb"; "B"; "C"; "Db"; "D"; "Eb"; "E"; "F"; "Gb"; "G"; "Ab"; "A" ]

let startListAtIndex index list = (list |> List.skip index) @ (list |> List.take index)

let interval intervals tonic =
    let scale = if sharpKeys |> List.contains tonic then chromaticScaleInSharps else chromaticScaleInFlats
    let tonicIndex = scale |> List.findIndex (fun note -> System.String.Equals(note, tonic, System.StringComparison.InvariantCultureIgnoreCase))
    let scaleFromTonic = startListAtIndex tonicIndex scale
    
    let intervals' = intervals |> Seq.map (function 'm' -> 1 | 'M' -> 2 | 'A' -> 3 | i -> failwith $"Invalid interval: {i}") |> List.ofSeq

    let rec filterScaleByIntervals remainingSourceScale targetScale =
        function
        | [] -> targetScale
        | intervalCount :: _ when intervalCount < 1 || intervalCount > 3 -> failwith $"Invalid interval supplied: '{intervalCount}' semitones"
        | intervalCount :: remainingIntervals ->
            filterScaleByIntervals
                (remainingSourceScale |> List.skip intervalCount)
                (targetScale
                 @ [ remainingSourceScale |> List.head ])
                remainingIntervals

    filterScaleByIntervals scaleFromTonic [] intervals'

let chromatic tonic = interval "mmmmmmmmmmmm" tonic
