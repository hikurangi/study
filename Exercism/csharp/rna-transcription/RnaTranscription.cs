using System;
using System.Linq;

public static class RnaTranscription
{
    private static char Match(char nucleotide) => nucleotide switch { 'G' => 'C', 'C' => 'G', 'T' => 'A', 'A' => 'U', var n => throw new ArgumentException($"Invalid nucleotide: {n}") };

    public static string ToRna(string nucleotide) => string.Concat(nucleotide.Select(Match));
}