using System;
using System.Collections.Generic;
using System.Linq;

public static class RomanNumeralExtension
{
    private static string mapGlyphs(int powerOfTen, int i)
    {
        var (one, five, ten) = powerOfTen switch
        {
            3 => ("M", "ↁ", "ↂ"), 2 => ("C", "D", "M"), 1 => ("X", "L", "C"), 0 => ("I", "V", "X"),
            _ => throw new ArgumentException("Unsupported number")
        };

        var glyphs = i switch
        {
            1 or 2 or 3 => Enumerable.Repeat(one, i),
            4 => new List<string> { one, five },
            5 => new List<string> { five },
            6 or 7 or 8 => new List<string> { five }.Concat(Enumerable.Repeat(one, i - 5)),
            9 => new List<string> { one, ten },
            _ => new List<string> { "" }
        };

        return string.Join("", glyphs);
    }

    private static string Transform(this IEnumerable<int> arabic, string roman) => arabic.Count() switch
    {
        0 => roman,
        var c => arabic.Skip(1).Transform(roman + mapGlyphs(c - 1, arabic.First()))
    };

    public static string ToRoman(this int value) => value.ToString().ToCharArray().Select(i => i - (int)'0').ToList().Transform("");
}