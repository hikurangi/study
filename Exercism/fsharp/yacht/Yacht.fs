module Yacht

type Category =
    | Ones
    | Twos
    | Threes
    | Fours
    | Fives
    | Sixes
    | FullHouse
    | FourOfAKind
    | LittleStraight
    | BigStraight
    | Choice
    | Yacht

type Die =
    | One = 1
    | Two = 2
    | Three = 3
    | Four = 4
    | Five = 5
    | Six = 6

let scoreByFace face =
    List.filter ((=) face) >> List.sumBy int

let countRollsByFace =
    List.countBy id >> List.map snd >> List.sortBy id

let isFullHouse = countRollsByFace >> (=) [ 2; 3 ]

let isFourOfAKind =
    countRollsByFace >> List.exists (fun i -> i >= 4)

let isLilStraight =
    List.map int >> List.sort >> (=) [ 1; 2; 3; 4; 5 ]

let isBigStraight =
    List.map int >> List.sort >> (=) [ 2; 3; 4; 5; 6 ]

// TODO: benchmark Seq vs List
let score category dice =
    match category with
    | Yacht ->
        match dice with
        | h :: t when t |> List.forall ((=) h) -> 50
        | _ -> 0
    | Ones -> dice |> scoreByFace Die.One
    | Twos -> dice |> scoreByFace Die.Two
    | Threes -> dice |> scoreByFace Die.Three
    | Fours -> dice |> scoreByFace Die.Four
    | Fives -> dice |> scoreByFace Die.Five
    | Sixes -> dice |> scoreByFace Die.Six
    | FullHouse ->
        if dice |> isFullHouse then
            dice |> List.sumBy int
        else
            0
    | FourOfAKind ->
        dice
        |> List.countBy id
        |> List.tryFind (fun (_, count) -> count >= 4)
        |> (function
        | Some (face, _) -> face |> int |> (*) 4
        | None -> 0)
    | LittleStraight -> if dice |> isLilStraight then 30 else 0
    | BigStraight -> if dice |> isBigStraight then 30 else 0
    | Choice -> dice |> List.sumBy int
