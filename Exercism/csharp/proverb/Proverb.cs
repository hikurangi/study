using System.Linq;

public static class Proverb
{
    public static string[] Recite(string[] subjects) => subjects.Length == 0
      ? subjects
      : subjects.Zip(subjects.Skip(1), (l, r) => $"For want of a {l} the {r} was lost.")
          .Append($"And all for the want of a {subjects[0]}.")
          .ToArray();
}