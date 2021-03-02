module PhoneNumber

open System.Text.RegularExpressions

let validateChars (pN: string) =
    match pN with
    | n when n |> String.exists System.Char.IsLetter -> Error "letters not permitted"
    | n when Regex.Match(n, "[,\?'\":;!]").Success -> Error "punctuations not permitted"
    | _ -> Ok pN

let sanitize (pN: string) =
    pN |> String.filter System.Char.IsDigit |> Ok

let validateLength (pN: string) =
    match pN.Length with
    | l when l < 10 -> Error "incorrect number of digits"
    | l when l = 11 && Seq.head pN <> '1' -> Error "11 digits must start with 1"
    | l when l > 11 -> Error "more than 11 digits"
    | _ -> Ok pN

let trimCountryCode (pN: string) = pN.[(pN.Length - 10)..] |> Ok

let validateAreaCode (pN: string) =
    match pN.[0] with
    | '1' -> Error "area code cannot start with one"
    | '0' -> Error "area code cannot start with zero"
    | _ -> Ok pN

let validateExchangeCode (pN: string) =
    match pN.[3] with
    | '1' -> Error "exchange code cannot start with one"
    | '0' -> Error "exchange code cannot start with zero"
    | _ -> Ok pN

let attemptParse (pN: string) =
    match System.UInt64.TryParse pN with
    | (true, p) -> Ok p
    | _ ->
        pN
        |> sprintf "could not parse value of %A to uint64"
        |> Error

let clean input: Result<uint64, string> =
    input
    |> validateChars
    |> Result.bind sanitize
    |> Result.bind validateLength
    |> Result.bind trimCountryCode
    |> Result.bind validateAreaCode
    |> Result.bind validateExchangeCode
    |> Result.bind attemptParse
