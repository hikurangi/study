module RomanNumerals

let mapGlyphs glyphs i =
    let one, five, ten = glyphs
    match i with
    | 1 | 2 | 3 -> List.init i (fun _ -> one)
    | 4 -> [ one; five ]
    | 5 -> [ five ]
    | 6 | 7 | 8 -> [ five ] @ List.init (i - 5) (fun _ -> one)
    | 9 -> [ one; ten ]
    | _ -> [ "" ]
    |> Seq.reduce (+)

let glyphsByPowersOfTen = function
    | 3 -> ("M", "", "") | 2 -> ("C", "D", "M") | 1 -> ("X", "L", "C") | 0 -> ("I", "V", "X")
    | _ -> failwith "Unsupported number"

let rec transform numeral = function
    | h :: t -> transform (numeral + mapGlyphs (glyphsByPowersOfTen (t |> List.length)) h) t
    | _ -> numeral

let roman: int -> string =
    string
    >> Seq.map (fun i -> int i - int '0')
    >> List.ofSeq
    >> transform ""
