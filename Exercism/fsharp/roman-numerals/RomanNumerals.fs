module RomanNumerals

let ones =
    function
    | '1' -> "I"
    | '2' -> "II"
    | '3' -> "III"
    | '4' -> "IV"
    | '5' -> "V"
    | '6' -> "VI"
    | '7' -> "VII"
    | '8' -> "VIII"
    | '9' -> "IX"
    | _ -> ""

let tens =
    function
    | '1' -> "X"
    | '2' -> "XX"
    | '3' -> "XXX"
    | '4' -> "XL"
    | '5' -> "L"
    | '6' -> "LX"
    | '7' -> "LXX"
    | '8' -> "LXXX"
    | '9' -> "XC"
    | _ -> ""

let hundreds =
    function
    | '1' -> "C"
    | '2' -> "CC"
    | '3' -> "CCC"
    | '4' -> "CD"
    | '5' -> "D"
    | '6' -> "DC"
    | '7' -> "DCC"
    | '8' -> "DCCC"
    | '9' -> "CM"
    | _ -> ""

let thousands =
    function
    | '1' -> "M"
    | '2' -> "MM"
    | '3' -> "MMM"
    | _ -> ""

let roman arabicNumeral =
    let n = arabicNumeral.ToString()
    (match n.Length with
    | 1 -> [ ones n.[0] ]
    | 2 -> [ tens n.[0]; ones n.[1] ]
    | 3 -> [ hundreds n.[0]; tens n.[1]; ones n.[2] ]
    | 4 -> [ thousands n.[0]; hundreds n.[1]; tens n.[2]; ones n.[3] ]
    | _ -> []
    ) |> Seq.reduce (+)
