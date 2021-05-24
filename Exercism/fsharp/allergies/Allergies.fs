module Allergies

open System

[<System.Flags>]
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
    (Enum.GetValues(typeof<Allergen>) :?> (Allergen [])) // unsafe runtime downcast - the confidence we have is that we wrote the enum ourselves.
    |> Array.filter (fun v -> allergicTo codedAllergies v)
    |> Array.toList