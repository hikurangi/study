using System.Collections.Generic;

public static class PrimeFactors
{
    public static long[] Factors(long number)
    {
        var factor = 2;
        var factors = new List<long>();

        while (number > 1)
        {
            while (number % factor != 0) factor++;
            number /= factor;
            factors.Add(factor);
        }

        return factors.ToArray();
    }
}