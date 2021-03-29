using System;

public static class CollatzConjecture
{
    public static int Steps(int number, int count = 0) => 
      number < 1
      ? throw new ArgumentOutOfRangeException()
      : number == 1
      ? count
      : number % 2 == 0
      ? Steps(number / 2, count + 1)
      : Steps((number * 3) + 1, count + 1);
}