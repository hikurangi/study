module BirdWatcher

let lastWeek: int [] = [| 0; 2; 5; 3; 7; 8; 4 |]

let yesterday (counts: seq<'a>) =
    counts |> Seq.item ((counts |> Seq.length) - 2)

let total (counts: seq<int>) = counts |> Seq.fold (+) 0

let dayWithoutBirds (counts: seq<int>) = counts |> Seq.contains 0

let incrementTodaysCount (counts: int []) : int [] =
    counts
    |> Seq.take 6
    |> Seq.rev
    |> Seq.append (Seq.singleton ((counts |> Seq.last) + 1))
    |> Seq.rev
    |> Seq.toArray

let oddWeek (counts: int []) : bool =
    let tagged = counts |> Seq.mapi (fun idx it -> idx, it)
    
    let evens = tagged |> Seq.filter (fun (idx, _) -> idx % 2 = 0)
    let evensAreOnes = evens |> Seq.forall (fun (_, it) -> it = 1)
  
    let odds = tagged |> Seq.filter (fun (idx, _) -> idx % 2 <> 0)
    let oddsAreZeroes = odds |> Seq.forall (fun (_, it) -> it = 0)
    
    evensAreOnes && oddsAreZeroes