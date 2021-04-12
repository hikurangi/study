using System;
using System.Linq;

public static class ArmstrongNumbers
{
    public static bool IsArmstrongNumber(int number) {
      var chars = number.ToString().ToCharArray();
      return number == chars.Sum(c => Math.Pow(c - '0', chars.Length));
    }
}