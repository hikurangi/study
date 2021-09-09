module RomanNumerals

let rec transform map arabic roman =
    match map, arabic with
    | _, 0 | [], _ -> roman
    | (a, r) :: t, _ ->
         let reps = arabic / a
         let arabic' = arabic - reps * a
         let roman' = roman + (r |> List.replicate reps |> String.concat "")
         transform t arabic' roman'

let conversions =
    [ 1000, "M"; 900, "CM"; 500, "D"; 400, "CD"; 100, "C"; 90, "XC"; 50, "L"; 40, "XL"; 10, "X"; 9, "IX"; 5, "V"; 4, "IV"; 1, "I" ]

let roman arabic = transform conversions arabic ""
