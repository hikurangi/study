using System;
using System.Collections.Generic;
using System.Linq;

public enum Colors { Black = 0, Brown = 1, Red = 2, Orange = 3, Yellow = 4, Green = 5, Blue = 6, Violet = 7, Grey = 8, White = 9 }

public static class ResistorColorTrio
{
    private static int ColorByName(string color) => (int)Enum.Parse<Colors>(color, true);

    public static string Label(string[] colors) => colors
      .Select((color, i) => i == 2
        ? string.Concat(Enumerable.Repeat('0', ColorByName(color)))
        : ColorByName(color).ToString()
      )
      .ConcatString()
      .ToInt32()
      .InOhms(); // I should really write a pipe/composition function rather than using this arbitrary extension method
}

public static class Extensions
{
    public static string ConcatString(this IEnumerable<string> e) => string.Concat(e);
    public static int ToInt32(this string s) => Convert.ToInt32(s);
    public static string InOhms(this int number) => number switch
    {
        var n when n > 0 && n < 1000 => $"{number} ohms",
        var n when n > 999 && n < 999001 => $"{number / 1000} kiloohms",
        _ => throw new ArgumentOutOfRangeException($"Invalid resistance measure: {number}")
    };
}