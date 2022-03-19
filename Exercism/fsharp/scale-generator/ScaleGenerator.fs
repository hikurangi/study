module ScaleGenerator
    
let sharpKeys = ["a"; "C"; "e"; "G"; "b"; "D"; "f#"; "A"; "c#"; "E"; "g#"; "B"; "d#"; "F#"]
let chromaticScaleInSharps = [ "C"; "C#"; "D"; "D#"; "E"; "F"; "F#"; "G"; "G#"; "A"; "A#"; "B" ]
let chromaticScaleInFlats = [ "Bb"; "B"; "C"; "Db"; "D"; "Eb"; "E"; "F"; "Gb"; "G"; "Ab"; "A" ]

let startListAtIndex index list = (list |> List.skip index) @ (list |> List.take index)

let interval intervals tonic =
    let scale = if sharpKeys |> List.contains tonic then chromaticScaleInSharps else chromaticScaleInFlats
    let indexOfTonic = scale |> List.findIndex (fun note -> System.String.Equals(note, tonic, System.StringComparison.InvariantCultureIgnoreCase))
    let scaleFromTonic = startListAtIndex indexOfTonic scale
    
    intervals
        |> Seq.map (function 'm' -> 1 | 'M' -> 2 | 'A' -> 3 | i -> failwith $"Invalid interval: {i}")
        |> Seq.scan (+) 0
        |> Seq.take (intervals |> Seq.length) // Seq.scan appends a final reduced value we aren't using
        |> Seq.map (function idx -> scaleFromTonic[idx])
        |> List.ofSeq

let chromatic tonic = interval "mmmmmmmmmmmm" tonic
