module PigLatin

let isConsonant letter =
    [ 'a'; 'e'; 'i'; 'o'; 'u' ]
    |> Seq.forall (fun l -> l |> char <> letter)

let isVowelyConsonant letter =
    [ 'y'; 'x' ]
    |> Seq.exists (fun l -> l |> char = letter)

let rec formatConsonantStarts start remainder =
    let nextChar = remainder |> Seq.tryItem 0 |> (function Some c -> c | None -> 
    ' ') // TODO

    let isUFollowingQ =
        start |> Seq.length > 0
        && start |> Seq.last = 'q' // tryLast
        && nextChar = 'u'

    match (nextChar |> isConsonant || nextChar |> isVowelyConsonant) || isUFollowingQ with
    | true -> formatConsonantStarts ([ nextChar ] |> Seq.append start) (remainder |> Seq.tail)
    | false ->
        (start
         |> Seq.append remainder
         |> System.String.Concat)

let translate input =
    let firstLetter = input |> Seq.head

    let doesStartWithVowelSound = firstLetter |> (isConsonant >> not)

    // if it starts with a vowel sound, just add "ay"
    // if it starts with a consonant chunk which begins with a vowel sound, just add "ay"
    let doesStartWithConsonantChunk =
        input |> Seq.take 2 |> Seq.forall isConsonant

    let doesStartWithVowelyConsonant = firstLetter |> isVowelyConsonant
    // if it starts with a consonant/chunk, move that to the end and add "ay"
    (match doesStartWithVowelSound
           || doesStartWithConsonantChunk
              && doesStartWithVowelyConsonant with
     | true -> input
     | false -> formatConsonantStarts [] input)
    + "ay"
