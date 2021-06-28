module ProteinTranslation

let codonToProtein = function
    | "AUG" -> "Methionine"
    | "UUU" | "UUC" -> "Phenylalanine"
    | "UUA" | "UUG" -> "Leucine"
    | "UCU" | "UCC" | "UCA" | "UCG" -> "Serine"
    | "UAU" | "UAC" -> "Tyrosine"
    | "UGU" | "UGC" -> "Cysteine"
    | "UGG" -> "Tryptophan"
    | "UAA" | "UAG" | "UGA" -> "Stop"
    | n -> failwith $"Invalid codon '{n}' supplied"

let proteins rna =
    rna
    |> Seq.chunkBySize 3
    |> Seq.map (System.String >> codonToProtein)
    |> Seq.takeWhile ((<>) "Stop")
    |> List.ofSeq
