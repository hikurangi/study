module Acronym

let abbreviate (phrase: string) = // Pinched from https://exercism.org/tracks/fsharp/exercises/acronym/solutions/mikecoop
    phrase // Full credit to mikecoop for his sorcerer-level .NET knowledge! 
    |> System.Globalization.CultureInfo.CurrentCulture.TextInfo.ToLower
    |> System.Globalization.CultureInfo.CurrentCulture.TextInfo.ToTitleCase
    |> String.filter System.Char.IsUpper
