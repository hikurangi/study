using System.Collections.Generic;
using System.Linq;

public static class Etl
{
    public static Dictionary<string, int> Transform(Dictionary<int, string[]> old) => old
      .SelectMany(p => p.Value.Select(v => (v.ToLowerInvariant(), p.Key)))
      .ToDictionary(p => p.Item1, p => p.Item2);
}