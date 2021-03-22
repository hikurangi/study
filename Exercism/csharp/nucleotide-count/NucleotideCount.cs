using System;
using System.Linq;
using System.Collections.Generic;

public static class NucleotideCount
{
    private const string Nucleotides = "ACGT";

    public static IDictionary<char, int> Count(string sequence) => !sequence.All(Nucleotides.Contains)
      ? throw new ArgumentException($"This nucleotide sequence contains invalid entries: '{sequence}'")
      : (sequence + Nucleotides).GroupBy(c => c).ToDictionary(c => c.Key, c => c.Count() - 1);
}