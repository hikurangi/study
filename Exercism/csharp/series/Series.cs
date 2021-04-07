using System;
using System.Collections.Generic;
using System.Linq;

public static class Series
{
    private static string[] GetSlices(string numbers, int sliceLength, IEnumerable<string> slices) => numbers.Length < sliceLength
      ? slices.ToArray()
      : GetSlices(numbers.Substring(1), sliceLength, slices.Append(String.Concat(numbers.Take(sliceLength))));

    public static string[] Slices(string numbers, int sliceLength) => sliceLength < 1 || sliceLength > numbers.Length
      ? throw new ArgumentException()
      : GetSlices(numbers, sliceLength, new List<string>());
}