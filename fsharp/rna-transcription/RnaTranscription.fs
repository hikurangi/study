module RnaTranscription

let toRna (dna: string): string =
    dna
    |> String.map
        (fun c ->
            match c with
            | 'C' -> 'G'
            | 'G' -> 'C'
            | 'T' -> 'A'
            | 'A' -> 'U'
            | _ -> c)