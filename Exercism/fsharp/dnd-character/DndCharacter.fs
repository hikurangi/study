module DndCharacter

open System

let modifier x = (decimal (x - 10) / 2m) |> floor |> int

let ability () =
    List.init 4 (fun _ -> Random().Next(1, 7))
    |> List.sort
    |> List.tail
    |> List.sum

type Character =
    { Strength: int
      Dexterity: int
      Constitution: int
      Intelligence: int
      Wisdom: int
      Charisma: int
      Hitpoints: int }

let createCharacter () =
    let constitution = ability ()

    { Strength = ability ()
      Dexterity = ability ()
      Constitution = constitution
      Intelligence = ability ()
      Wisdom = ability ()
      Charisma = ability ()
      Hitpoints = 10 + (modifier constitution) }
