module Yacht

type Category = Ones | Twos | Threes | Fours | Fives | Sixes | FullHouse | FourOfAKind | LittleStraight | BigStraight | Choice | Yacht
type Die = One = 1 | Two = 2 | Three = 3 | Four = 4 | Five = 5 | Six = 6

let score category dice =

    // Cache it
    let diceScoredByFace face = dice |> List.filter ((=) face) |> List.sumBy int
    let diceCountedByFace = dice |> List.countBy id
    let diceSortedByFace = dice |> List.sortBy int

    // Return it
    match category with
    | Ones -> diceScoredByFace Die.One
    | Twos -> diceScoredByFace Die.Two
    | Threes -> diceScoredByFace Die.Three
    | Fours -> diceScoredByFace Die.Four
    | Fives -> diceScoredByFace Die.Five
    | Sixes -> diceScoredByFace Die.Six
    | FullHouse ->
        match diceCountedByFace |> List.sortBy snd with
        | [ (_, 2); (_, 3) ] -> dice |> List.sumBy int
        | _ -> 0
    | FourOfAKind ->
        match diceCountedByFace |> List.tryFind (fun (_, count) -> count >= 4) with
        | Some (face, _) -> face |> int |> (*) 4
        | None -> 0
    | LittleStraight ->
        match diceSortedByFace with
        | [ Die.One; Die.Two; Die.Three; Die.Four; Die.Five ] -> 30
        | _ -> 0
    | BigStraight ->
        match diceSortedByFace with
        | [ Die.Two; Die.Three; Die.Four; Die.Five; Die.Six ] -> 30
        | _ -> 0
    | Choice -> dice |> List.sumBy int
    | Yacht ->
        match dice |> set |> Set.count with
        | 1 -> 50
        | _ -> 0
