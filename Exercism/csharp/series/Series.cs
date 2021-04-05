using System;
using System.Collections.Generic;
using System.Linq;

public static class Series
{
    private static IEnumerable<string> GetSlices(string numbers, int sliceLength, IEnumerable<string> slices) =>
      numbers.Length == 0 || numbers.Length < sliceLength
        ? slices
        : GetSlices(
            numbers.Substring(1),
            sliceLength,
            slices.Append(String.Concat(numbers.Take(sliceLength)))
          );

    public static string[] Slices(string numbers, int sliceLength)
    {
        if (sliceLength < 1 || sliceLength > numbers.Length) throw new ArgumentException("Invalid slice length");
        if (numbers.Length < 1) throw new ArgumentException("Invalid source sequence");

        return GetSlices(numbers, sliceLength, new List<string>()).ToArray();
    }
}