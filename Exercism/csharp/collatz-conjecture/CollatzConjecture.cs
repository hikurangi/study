using System;

public static class CollatzConjecture
{
    public static int Steps(int number) => number switch
    {
        < 1                   => throw new ArgumentOutOfRangeException(),
        1                     => 0,
        var n when n % 2 == 0 => Steps(number / 2) + 1,
        _                     => Steps((number * 3) + 1) + 1
    };
}