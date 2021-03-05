using System.Linq;
using System.Text.RegularExpressions;

public static class Acronym
{
    public static string Abbreviate(string phrase) => Regex.Split(phrase, @"[\s_-]+")
      .Aggregate("", (acronym, w) => acronym += System.Char.ToUpperInvariant(w[0]));
}