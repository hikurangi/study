module SecretHandshake

open System

[<Flags>]
type Shake =
    | Wink = 1 // 000001
    | DoubleBlink = 2 // 000010
    | CloseYourEyes = 4 // 000100
    | Jump = 8 // 001000
    | Reverse = 16 // 010000

let isShake mask shake = (enum<Shake> mask).HasFlag shake

let handleReversing s =
    if s |> Seq.contains Shake.Reverse then
        Seq.rev s
    else
        s

let matchShake =
    function
    | Shake.Wink -> "wink"
    | Shake.DoubleBlink -> "double blink"
    | Shake.CloseYourEyes -> "close your eyes"
    | Shake.Jump -> "jump"
    | _ -> failwith "uh oh"

let commands number =
    Enum.GetValues typeof<Shake>
    |> Seq.cast<Shake>
    |> Seq.filter (isShake number)
    |> handleReversing
    |> Seq.filter ((<>) Shake.Reverse)
    |> Seq.map matchShake
    |> Seq.toList
