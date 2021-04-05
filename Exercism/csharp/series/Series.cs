using System;
using System.Collections.Generic;
using System.Linq;

public static class Series
{
    public static string[] Slices(string numbers, int sliceLength)
    {
        if (sliceLength < 1 || sliceLength > numbers.Length) throw new ArgumentException("Invalid slice length");

        if (numbers.Length < 1) throw new ArgumentException("Invalid source sequence");

        var slices = new List<string>();

        for (int i = 0; i < numbers.Length; i++)
        {
            var slice = String.Concat(numbers.Substring(i).Take(sliceLength));

            if (slice.Length != sliceLength) break;

            slices.Add(slice);
        }

        return slices.ToArray();
    }
}