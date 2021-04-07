using System;

public static class CollatzConjecture
{
    public static int Steps(int number, int count = 0) => number switch
    {
        < 1                   => throw new ArgumentOutOfRangeException(),
        1                     => count,
        var n when n % 2 == 0 => Steps(number / 2, count + 1),
        _                     => Steps((number * 3) + 1, count + 1)
    };
}