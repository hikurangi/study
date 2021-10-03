module BirdWatcher

let lastWeek = [| 0; 2; 5; 3; 7; 8; 4 |]

let yesterday (counts: seq<'a>) =
    counts |> Seq.item ((counts |> Seq.length) - 2)

let total: seq<int> -> int = Seq.reduce (+)

let dayWithoutBirds: seq<int> -> bool = Seq.contains 0

let incrementTodaysCount counts =
    [| 1 + Array.last counts |]
    |> Array.append (counts |> Array.take 6)

let oddWeek: seq<int> -> bool =
    Seq.pairwise
    >> Seq.forall
        (fun (a, b) -> a + b = 1 && [ a; b ] |> Seq.forall (fun i -> [ 1; 0 ] |> Seq.contains i))
