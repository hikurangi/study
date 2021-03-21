using System;
using System.Linq;

public static class Hamming
{
    public static int Distance(string firstStrand, string secondStrand)
    {
        return firstStrand.Length != secondStrand.Length // validate
          ? throw new ArgumentException()
          : firstStrand == secondStrand // avoid unnecessary work
          ? 0
          : firstStrand // actually measure the hamming distance
              .Zip(secondStrand)
              .Aggregate(0, (state, comparison) => comparison.First == comparison.Second ? state : state + 1);
    }
}