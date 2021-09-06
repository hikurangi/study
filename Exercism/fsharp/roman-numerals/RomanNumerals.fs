module RomanNumerals

let transform one five ten i =
    match i with
    | 1 | 2 | 3 -> List.init i (fun _ -> one)
    | 4 -> [ one; five ]
    | 5 -> [ five ]
    | 6 | 7 | 8 -> [ five ] @ List.init (i - 5) (fun _ -> one)
    | 9 -> [ one; ten ]
    | _ -> [ "" ]
    |> Seq.reduce (+)

let rec convert numeral number =
    match (number |> Seq.length, number) with
    | 4, h :: t -> convert (numeral + transform "M" "" "" h) t
    | 3, h :: t -> convert (numeral + transform "C" "D" "M" h) t
    | 2, h :: t -> convert (numeral + transform "X" "L" "C" h) t
    | 1, h :: t -> convert (numeral + transform "I" "V" "X" h) t
    | _ -> numeral + ""

let roman: int -> string =
    string
    >> Seq.map (fun i -> int i - int '0')
    >> List.ofSeq
    >> convert ""
