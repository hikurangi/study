using System;
using System.Linq;

public static class Grains
{
    public static ulong Square(int n) => n > 0 && n < 65
      ? (ulong)(1UL << n - 1)
      : throw new ArgumentOutOfRangeException();

    public static ulong Total() => (ulong)Enumerable.Range(1, 64).Select(i => (long)Square(i)).Sum();
}