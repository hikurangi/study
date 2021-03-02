module Bob

open System.Text.RegularExpressions

let isShouting s =
    Regex.IsMatch(s, "^[^a-z]+$")
    && Regex.IsMatch(s, "[A-Z]")

let isQuestion s = Regex.IsMatch(s, "\?$")

let response (statement: string) =
    match statement.Trim() with
    | s when isShouting s && isQuestion s -> "Calm down, I know what I'm doing!"
    | s when isShouting s -> "Whoa, chill out!"
    | s when isQuestion s -> "Sure."
    | "" -> "Fine. Be that way!"
    | _ -> "Whatever."