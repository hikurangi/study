using System.Collections.Generic;
using System.Linq;

public static class SumOfMultiples
{
    public static int Sum(IEnumerable<int> multiples, int max) => max == 1
      ? 0
      : Enumerable.Range(1, max - 1)
          .Where(candidate => candidate > 0 && multiples.Any(factor => factor > 0 && candidate % factor == 0))
          .Sum();
}