module RotationalCipher

open System

let shiftCharBy shiftKey character =
    let highestLetterOfCase =
        character
        |> (fun c -> if Char.IsLower c then 'z' else 'Z')
        |> int

    match character |> int |> (+) shiftKey with
    | _ when not (Char.IsLetter character) -> character
    | shiftedCharValue when shiftedCharValue <= highestLetterOfCase -> shiftedCharValue |> char
    | shiftedCharValue -> (shiftedCharValue - 26) |> char

let rotate shiftKey = Seq.map (shiftCharBy shiftKey) >> String.Concat
