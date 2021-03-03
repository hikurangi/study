using System.Linq;

public static class Isogram
{
    public static bool IsIsogram(string word) => word.Where(char.IsLetter)
      .GroupBy(char.ToLower)
      .All(c => c.Count() == 1);
}