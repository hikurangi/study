module RunLengthEncoding

open System

// Helper stolen from https://stackoverflow.com/questions/2279095/f-split-list-into-sublists-based-on-comparison-of-adjacent-elements#answer-9838741
let splitOn shouldSplit collection =
    Seq.foldBack // skips a few calls to Seq.rev
        (fun el ->
            function
            | [] -> [ [ el ] ] // at the end of the sequence, ie: the beginning of the iteration
            | (x :: xs) :: ys when not (shouldSplit el x) -> (el :: (x :: xs)) :: ys // when the current element should not be split from the previous element, continue this chunk
            | collection' -> [ el ] :: collection') // otherwise, start a new chunk with this element
        collection
        []

let renderInteger i = if i > 1 then i |> string else ""

let encode: string -> string =
    splitOn (<>)
    >> Seq.fold (fun s i -> $"{s}{i |> Seq.length |> renderInteger}{i |> Seq.head}") ""

let replicateLetter encoded =
    if encoded |> Seq.length = 1 then
        encoded
    else
        let count = encoded |> Seq.takeWhile Char.IsDigit |> String.Concat |> int
        let letter = encoded |> Seq.last // should really tryLast
        letter |> Seq.replicate count

let isEncodingBoundary a b =
    match a |> Char.IsDigit, b |> Char.IsDigit with
    | false, false | false, true -> true
    | _ -> false

let decode: string -> string =
    splitOn isEncodingBoundary
    >> Seq.collect replicateLetter
    >> String.Concat
