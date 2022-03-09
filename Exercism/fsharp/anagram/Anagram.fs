module Anagram

open System

let alphabetise = Seq.sortBy Char.ToLower >> String.Concat

let caseInsensitiveStringComparison str1 str2 =
    String.Equals(str1, str2, StringComparison.CurrentCultureIgnoreCase)

let filterByTargetWord alphabetisedTargetWord originalTargetWord (alphabetisedCandidate, originalCandidate) =
    let doAlphabetisedWordsMatch = alphabetisedCandidate |> caseInsensitiveStringComparison alphabetisedTargetWord
    let doOriginalWordsMatch = originalCandidate |> caseInsensitiveStringComparison originalTargetWord

    doAlphabetisedWordsMatch && not doOriginalWordsMatch

let findAnagrams sources target =
    sources
    |> Seq.map (fun w -> alphabetise w, w)
    |> Seq.filter (filterByTargetWord (alphabetise target) target)
    |> Seq.map snd
    |> List.ofSeq
