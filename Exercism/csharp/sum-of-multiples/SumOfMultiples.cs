using System.Collections.Generic;
using System.Linq;

public static class SumOfMultiples
{
    public static int Sum(IEnumerable<int> multiples, int max) => multiples
      .Where(m => m > 0 && m <= max)
      .SelectMany(m => Enumerable.Range(multiples.Min(), max - multiples.Min()).Where(n => n % m == 0))
      .Distinct()
      .Sum();
}