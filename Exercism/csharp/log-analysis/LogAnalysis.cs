using System;
using System.Text.RegularExpressions;

public static class LogAnalysis
{
    public static string SubstringAfter(this string source, string substring) =>
        source.Substring(source.IndexOf(substring, StringComparison.InvariantCulture) + substring.Length);

    public static string SubstringBetween(this string source, string start, string end) =>
        source.Remove(source.IndexOf(end, StringComparison.InvariantCulture)).SubstringAfter(start);

    public static string Message(this string source) =>
        Regex.Match(source, @"\]:\s+(?<message>.+)\s*").Groups["message"].Value.Trim();

    public static string LogLevel(this string source) =>
        Regex.Match(source, @"\[(?<level>\w+)\]").Groups["level"].Value;
}