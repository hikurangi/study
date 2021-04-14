using System.Collections.Generic;
using System.Linq;

public static class Raindrops
{
    private static readonly (int factor, string name)[] _drops = { (3, "Pling"), (5, "Plang"), (7, "Plong") };
    public static string Convert(int number)
    {
        var processed = _drops.Aggregate("", (s, i) => number % i.factor == 0 ? s + i.name : s);
        return processed.Length == 0 ? number.ToString() : processed;
    }
}