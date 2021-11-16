using System.Collections.Generic;
using System.Linq;
using System.Text.RegularExpressions;

public static class RunLengthEncoding
{
    private static string Concat(this IEnumerable<string> coll) => string.Concat(coll);

    public static string Encode(string input) => new Regex(@"(.)\1*").Matches(input).Select(match =>
    {
        var letter = match.Value.First();
        var count = match.Value.Length;

        return count == 1 ? $"{letter}" : $"{count}{letter}";
    }).Concat();

    public static string Decode(string input) => new Regex(@"(\d*)(.)").Matches(input).Select(match =>
        new string(match.Groups[2].Value[0],
            match.Groups[1].Length == 0 ? 1 : int.Parse(match.Groups[1].Value))
    ).Concat();
}