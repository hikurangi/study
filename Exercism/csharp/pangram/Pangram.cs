using System.Linq;

public static class Pangram
{
  private static string alphabet = "abcdefghijklmnopqrstuvwxyz";

  public static bool IsPangram(string input) => alphabet.All(input.ToLower().Contains);
}
