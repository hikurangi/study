module ProteinTranslation
open System

let codonToProtein =
    function
    | "AUG" -> "Methionine"
    | "UUU" | "UUC" -> "Phenylalanine"
    | "UUA" | "UUG" -> "Leucine"
    | "UCU" | "UCC" | "UCA" | "UCG" -> "Serine"
    | "UAU" | "UAC" -> "Tyrosine"
    | "UGU" | "UGC" -> "Cysteine"
    | "UGG" -> "Tryptophan"
    | "UAA" | "UAG" | "UGA" -> "Stop"
    | _ -> failwith "Invalid codon supplied"

let proteins rna =
    rna
      |> Seq.chunkBySize 3
      |> Seq.map (String >> codonToProtein)
      |> Seq.takeWhile ((<>) "Stop")
      |> List.ofSeq
