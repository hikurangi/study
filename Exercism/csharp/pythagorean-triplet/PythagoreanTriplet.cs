using System.Collections.Generic;
using System.Linq;

public static class PythagoreanTriplet
{
    public static IEnumerable<(int a, int b, int c)> TripletsWithSum(int sum) => Enumerable.Range(1, sum)
      .Aggregate(new List<(int a, int b, int c)>(), (state, a) =>
      {
          var denonimator = 2 * (sum - a);
          var numerator = (2 * a * a) + (sum * sum) - 2 * (sum * a);

          if (denonimator > 0 && numerator % denonimator == 0)
          {
              var c = numerator / denonimator;
              var b = sum - a - c;

              if (b > a)
              {
                  state.Add((a, b, c));
              }
          }

          return state;
      });
}