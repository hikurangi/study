using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.RegularExpressions;

public static class LargestSeriesProduct
{
    private static bool IsNotDigits(string digits) => Regex.IsMatch(digits, @"[^\d]");
    
    private static IEnumerable<int> ToIntEnumerable(string digits) => digits.Select(d => int.Parse(d.ToString())); // TODO: parse should fail appropriately

    private static int ToProduct(IEnumerable<int> digits) => digits.Aggregate((state, n) => n * state);

    private static string Validate((string, int) v) => v switch
    {
        (_, int) t when t.Item2 < 0 => "The span must be positive",
        ("", _) => "The target string must not be empty",
        (string, int) t when t.Item2 > t.Item1.Length => "The span cannot be longer than the target string",
        (string, _) t when IsNotDigits(t.Item1) => "The target string must only contain digits",
        _ => ""
    };

    public static long GetLargestProduct(string digits, int span)
    {
        if (span == 0) return 1;

        var message = Validate((digits, span));
        if (message != "") throw new ArgumentException(message);

        var spans = new List<string>();

        for (int i = 0; i <= digits.Length - span; i++)
        {
            spans.Add(digits.Substring(i, span));
        };

        var largestProduct = spans
          .Select(ToIntEnumerable)
          .Select(ToProduct)
          .Max();

        return largestProduct;
    }
}