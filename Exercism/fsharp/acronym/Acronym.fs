module Acronym

let abbreviate: string -> string = // Pinched from https://exercism.org/tracks/fsharp/exercises/acronym/solutions/mikecoop
    System.Globalization.CultureInfo.CurrentCulture.TextInfo.ToLower
    >> System.Globalization.CultureInfo.CurrentCulture.TextInfo.ToTitleCase
    >> String.filter System.Char.IsUpper
