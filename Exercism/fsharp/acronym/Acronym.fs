module Acronym

open System
open System.Text.RegularExpressions

let abbreviate (phrase: string) =
    Regex.Replace(phrase, "[\-_, ]+", " ")
    |> (fun p -> p.Split ' ')
    |> Seq.map (Seq.head >> Char.ToUpper)
    |> String.Concat
