module ScaleGenerator
let isCaseInsensitiveMatchFor str1 str2 =
    System.String.Equals(str1, str2, System.StringComparison.InvariantCultureIgnoreCase)
    
let isTonicOfSharpKey tonic =
    ["a"; "C"; "e"; "G"; "b"; "D"; "f#"; "A"; "c#"; "E"; "g#"; "B"; "d#"; "F#"] |> List.contains tonic

let buildScaleFromTonic chromaticScale tonic =
    let scaleBeforeTonic =
        chromaticScale
        |> List.takeWhile (isCaseInsensitiveMatchFor tonic >> not)

    let scaleAfterTonic =
        chromaticScale
        |> List.skipWhile (isCaseInsensitiveMatchFor tonic >> not)

    scaleAfterTonic @ scaleBeforeTonic

let buildChromaticScaleFromTonic tonic =
    let starterChromaticScaleWithSharps =
        [ "C"; "C#"; "D"; "D#"; "E"; "F"; "F#"; "G"; "G#"; "A"; "A#"; "B" ]
        
    let starterChromaticScaleWithFlats =
        [ "Bb"; "B"; "C"; "Db"; "D"; "Eb"; "E"; "F"; "Gb"; "G"; "Ab"; "A" ]
        
    let chromaticScale =
      if tonic |> isTonicOfSharpKey then
        starterChromaticScaleWithSharps
      else
        starterChromaticScaleWithFlats
  
    buildScaleFromTonic chromaticScale tonic

let interval intervals tonic =

    let intervalsAsSemitones = intervals |> Seq.map (function 'm' -> 1 | 'M' -> 2 | 'A' -> 3 | i -> failwith $"Invalid interval: {i}") |> List.ofSeq
    
    let chromaticScaleFromTonic = buildChromaticScaleFromTonic tonic

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

    filterScaleByIntervals chromaticScaleFromTonic [] intervalsAsSemitones

let chromatic tonic = interval "mmmmmmmmmmmm" tonic
