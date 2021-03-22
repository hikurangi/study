using System;
using System.Linq;

public static class Hamming
{
    public static int Distance(string firstStrand, string secondStrand) => firstStrand.Length != secondStrand.Length // validate
      ? throw new ArgumentException()
      : firstStrand == secondStrand // avoid unnecessary work
      ? 0
      : firstStrand // actually measure the hamming distance
          .Zip(secondStrand, (f, s) => f == s ? 0 : 1)
          .Sum();
}