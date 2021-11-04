module BirdWatcher

let lastWeek = [| 0; 2; 5; 3; 7; 8; 4 |]

let yesterday (counts: seq<'a>) =
    counts |> Seq.item ((counts |> Seq.length) - 2)

let total: seq<int> -> int = Seq.reduce (+)

let dayWithoutBirds: seq<int> -> bool = Seq.contains 0

let incrementTodaysCount counts =
    [| counts |> Array.last |> (+) 1 |]
    |> Array.append (counts |> Array.take 6)

// exquisite solution stolen from: https://stackoverflow.com/questions/7942630/splitting-a-list-of-items-into-two-lists-of-odd-and-even-indexed-items#answer-7945580
let evensAndOdds list = 
    Seq.foldBack (fun i (l, r) -> i :: r, l) list ([], [])

let oddWeek counts =
    let evenAndOddDays = counts |> evensAndOdds
    let evenDays = evenAndOddDays |> snd
    let oddDays = evenAndOddDays |> fst

    evenDays |> Seq.forall ((=) 0)
    || evenDays |> Seq.forall ((=) 10)
    || oddDays |> Seq.forall ((=) 5)
