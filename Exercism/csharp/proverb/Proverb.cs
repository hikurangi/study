using System.Collections.Generic;
using System.Linq;

public static class Proverb
{
    public static string[] Recite(string[] subjects) => subjects.Count() == 0
      ? subjects
      : Reciter(new List<string>(), subjects).Append(string.Format($"And all for the want of a {subjects.First()}.")).ToArray();

    private static IEnumerable<string> Reciter(IEnumerable<string> poem, IEnumerable<string> subjects) => subjects.Count() == 1
      ? poem
      : Reciter(poem.Append($"For want of a {subjects.ElementAt(0)} the {subjects.ElementAt(1)} was lost."), subjects.Skip(1));
}