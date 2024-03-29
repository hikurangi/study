using System.Collections.Generic;
using System.Linq;

public static class RomanNumeralExtension
{
    private static readonly IEnumerable<(int, string)> _conversions = new List<(int arabic, string roman)>
    {
        (1000, "M"), (900, "CM"), (500, "D"), (400, "CD"), (100, "C"), (90, "XC"), (50, "L"), (40, "XL"), (10, "X"), (9, "IX"), (5, "V"), (4, "IV"), (1, "I")
    };

    public static string ToRoman(this int value) => Transform(_conversions, "", value);

    private static string Transform(IEnumerable<(int, string)> conversions, string roman, int arabic) =>
        (conversions, arabic) switch
        {
            (_, 0) => roman, var t when !t.conversions.Any() => roman,
            var t => Iterate(t.conversions, roman, arabic)
        };

    private static string Iterate(IEnumerable<(int, string)> conversions, string roman, int arabic)
    {
        var (a, r) = conversions.First();
        var reps = arabic / a;
        var remainder = arabic - (a * reps);
        var updateNumeral = string.Concat(roman, string.Concat(Enumerable.Repeat(r, reps)));
        return Transform(conversions.Skip(1), updateNumeral, remainder);
    }
}