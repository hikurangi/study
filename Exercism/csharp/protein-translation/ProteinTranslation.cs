using System;
using System.Collections.Generic;
using System.Linq;

public static class ProteinTranslation
{
    private static string Match(string strand) => strand.Substring(0, 3) switch
    {
        "AUG" => "Methionine",
        "UUU" or "UUC" => "Phenylalanine",
        "UUA" or "UUG" => "Leucine",
        "UCU" or "UCC" or "UCA" or "UCG" => "Serine",
        "UAU" or "UAC" => "Tyrosine",
        "UGU" or "UGC" => "Cysteine",
        "UGG" => "Tryptophan",
        "UAA" or "UAG" or "UGA" => "STOP",
        var s => throw new ArgumentException($"Invalid strand: {s}")
    };

    private static string[] ProcessProteins(string strand, IEnumerable<string> processed) => 
      strand?.Length < 3 || Match(strand) == "STOP"
        ? processed.ToArray()
        : ProcessProteins(strand.Substring(3), processed.Append(Match(strand)));

    public static string[] Proteins(string strand) => ProcessProteins(strand, new List<string>());
}