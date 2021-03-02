module ArmstrongNumbers

let isArmstrongNumber number =
    let asString = string number
    let length = asString.Length

    asString
    |> Seq.fold (fun s c -> s + pown (int c - int '0') length) 0
    |> (=) number
