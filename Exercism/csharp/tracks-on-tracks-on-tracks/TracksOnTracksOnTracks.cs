using System;
using System.Collections.Generic;
using System.Linq;

public static class Languages
{
  public static List<string> NewList() => new();
  public static List<string> GetExistingLanguages() => new List<string> { "C#", "Clojure", "Elm" };
  public static List<string> AddLanguage(List<string> languages, string language) => languages.Append(language).ToList();

  public static int CountLanguages(List<string> languages) => languages.Count;
  public static bool HasLanguage(List<string> languages, string language) => languages.Contains(language);
  public static List<string> ReverseList(List<string> languages) => languages.Reverse<string>().ToList();
  public static bool IsExciting(List<string> languages) => languages.FirstOrDefault() == "C#" || (Enumerable.Range(2, 2).Contains(languages.Count) && languages[1] == "C#");
  public static List<string> RemoveLanguage(List<string> languages, string language) => languages.Where(l => l != language).ToList();
  public static bool IsUnique(List<string> languages) => new HashSet<string>(languages).Count == languages.Count;
}
