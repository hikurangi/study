using System;
using System.Linq;

public static class Bob
{   
    private static bool IsShouting(string s) => s.ToUpperInvariant() == s && s.Any(Char.IsLetter);
    private static bool IsQuestion(string s) => s.Length > 0 && s.Last() == '?';
 
    public static string Response(string statement) => statement.Trim() switch {
      var s when IsQuestion(s) && IsShouting(s) => "Calm down, I know what I'm doing!",
      var s when IsShouting(s) => "Whoa, chill out!",
      var s when IsQuestion(s) => "Sure.",
      var s when s == "" => "Fine. Be that way!",
      _ => "Whatever."
    };
}
