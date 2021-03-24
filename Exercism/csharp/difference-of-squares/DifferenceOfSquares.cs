using System.Collections.Generic;
using System.Linq;

public static class DifferenceOfSquares
{
    public static int CalculateSquareOfSum(int max) => max
      .GetRange()
      .Sum()
      .Square();

    public static int CalculateSumOfSquares(int max) => max
      .GetRange()
      .Sum(Square);

    public static int CalculateDifferenceOfSquares(int max) => CalculateSquareOfSum(max) - CalculateSumOfSquares(max);

    public static int Square(this int n) => n * n;

    public static IEnumerable<int> GetRange(this int n) => Enumerable.Range(1, n);
}