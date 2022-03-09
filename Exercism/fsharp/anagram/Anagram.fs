module Anagram

let is str1 str2 = System.String.Equals(str1, str2, System.StringComparison.InvariantCultureIgnoreCase)
let sorted (str: string) = str.ToLower() |> Seq.sort |> System.String.Concat
let isAnagramOf target candidate = (sorted candidate = sorted target) && not (candidate |> is target)
let findAnagrams sources target = sources |> List.filter (isAnagramOf target)