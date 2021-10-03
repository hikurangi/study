module TracksOnTracksOnTracks

let newList = List.empty<string>

let existingList = [ "F#"; "Clojure"; "Haskell" ]

let addLanguage language languages = language :: languages

let countLanguages = Seq.length

let reverseList = List.rev

let excitingList =
    function
    | "F#" :: _ -> true
    | _ :: "F#" :: t when t |> Seq.length < 2 -> true
    | _ -> false
