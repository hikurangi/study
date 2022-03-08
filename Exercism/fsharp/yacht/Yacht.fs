module Yacht

type Category = Ones | Twos | Threes | Fours | Fives | Sixes | FullHouse | FourOfAKind | LittleStraight | BigStraight | Choice | Yacht
type Die = One = 1 | Two = 2 | Three = 3 | Four = 4 | Five = 5 | Six = 6

let score category dice =
    let diceScoredByFace face = dice |> List.filter ((=) face) |> List.sumBy int
    let diceSorted = dice |> List.sort
    let diceSortedByCounts = dice |> List.countBy int |> List.sortBy snd
    
    match category with
    | Ones -> diceScoredByFace Die.One
    | Twos -> diceScoredByFace Die.Two
    | Threes -> diceScoredByFace Die.Three
    | Fours -> diceScoredByFace Die.Four
    | Fives -> diceScoredByFace Die.Five
    | Sixes -> diceScoredByFace Die.Six
    | FullHouse ->
        diceSortedByCounts |> (function
        | [ (_, 2); (_, 3) ] -> dice |> List.sumBy int
        | _ -> 0)
    | FourOfAKind ->
        diceSortedByCounts |> List.tryFind (fun (_, count) -> count >= 4) |> (function
        | Some (face, _) -> face |> (*) 4
        | None -> 0)
    | LittleStraight ->
        if diceSorted = [ Die.One; Die.Two; Die.Three; Die.Four; Die.Five ] then 30 else 0
    | BigStraight ->
        if diceSorted = [ Die.Two; Die.Three; Die.Four; Die.Five; Die.Six ] then 30 else 0
    | Choice -> dice |> List.sumBy int
    | Yacht -> if dice |> set |> Set.count = 1 then 50 else 0
