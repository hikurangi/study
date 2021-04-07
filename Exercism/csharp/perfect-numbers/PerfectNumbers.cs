using System;
using System.Linq;

public enum Classification
{
    Perfect = 0,
    Abundant = 1,
    Deficient = -1
}

public static class PerfectNumbers
{
    public static Classification Classify(int number) => number < 1
      ? throw new ArgumentOutOfRangeException()
      : (Classification)Enumerable.Range(1, number / 2).Where(i => number % i == 0).Sum().CompareTo(number);
}