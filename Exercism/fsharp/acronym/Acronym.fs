module Acronym

open System.Text.RegularExpressions
open System

let abbreviate (phrase: string) =
    Regex.Replace(phrase, "[\-_, ]+", " ")
    |> (fun p -> p.Split ' ')
    |> Seq.map (Seq.head >> Char.ToUpper)
    |> String.Concat
