module NucleotideCount

let populateNucleotides (state: Map<char, int>) n =
    state.Change(
        n,
        (function
        | Some v -> Some(v + 1)
        | v -> failwith $"Invalid nucleotide {v}")
    )

let nucleotideCounts strand =
    match System.Text.RegularExpressions.Regex.IsMatch(strand, "^[ACGT]*$") with
    | false -> None
    | true ->
        strand
        |> Seq.fold populateNucleotides (Map [ ('A', 0); ('C', 0); ('G', 0); ('T', 0) ])
        |> Some
