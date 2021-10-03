module TracksOnTracksOnTracks

let newList = List.empty<string>

let existingList = [ "F#"; "Clojure"; "Haskell" ]

let addLanguage language languages = language :: languages

let countLanguages = Seq.length

let reverseList = List.rev

let excitingList languages =
    match languages |> Seq.length, languages |> Seq.tryFindIndex (fun i -> i = "F#") with
    | l, Some _ when l < 3 -> true
    | 3, Some i when i < 2 -> true
    | 4, Some i when i < 1 -> true
    | _ -> false
