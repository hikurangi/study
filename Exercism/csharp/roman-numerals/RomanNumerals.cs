using System;
using System.Collections.Generic;
using System.Linq;

public static class RomanNumeralExtension
{
    private static readonly IEnumerable<(int, string)> _conversions = new List<(int arabic, string roman)> {
      ( 1000, "M" ), ( 900, "CM" ), ( 500, "D" ), ( 400, "CD" ), ( 100, "C" ), ( 90, "XC" ), ( 50, "L" ), ( 40, "XL" ), ( 10, "X" ), ( 9, "IX" ), ( 5, "V" ), ( 4, "IV" ), ( 1, "I" )
    };

    public static string ToRoman(this int value) => Transform(_conversions, value, "");

    private static string Transform(IEnumerable<(int, string)> conversions, int arabic, string roman) => (conversions, arabic) switch {
      (_, 0) => roman, var t when t.conversions.Count() == 0 => roman,
      var t => Iterate(t.conversions, arabic, roman)
    };

    private static string Iterate(IEnumerable<(int, string)> conversions, int arabic, string roman)
    {
      var (a, r) = conversions.First();
      var reps = arabic / a;
      var remainder = arabic - (a * reps);
      var updateNumeral = String.Concat(roman, String.Concat(Enumerable.Repeat(r, reps)));
      return Transform(conversions.Skip(1), remainder, updateNumeral);
    }
}