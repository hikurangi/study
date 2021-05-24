module Allergies

open System

[<Flags>]
type Allergen =
    | Eggs = 1
    | Peanuts = 2
    | Shellfish = 4
    | Strawberries = 8
    | Tomatoes = 16
    | Chocolate = 32
    | Pollen = 64
    | Cats = 128

let allergicTo codedAllergies allergen =
    (enum<Allergen> codedAllergies).HasFlag allergen

let list codedAllergies =
    Enum.GetValues typeof<Allergen>
    |> Seq.cast<Allergen>
    |> Seq.filter (allergicTo codedAllergies)
    |> Seq.toList
