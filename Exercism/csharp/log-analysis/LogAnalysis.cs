using System;
using System.Linq;
using System.Text.RegularExpressions;

public static class LogAnalysis
{
    public static string SubstringAfter(this string source, string substring) => source.Split(substring).LastOrDefault();
    public static string SubstringBetween(this string source, string start, string end) => source.SubstringAfter(start).Split(end).FirstOrDefault();
    public static string Message(this string source) => source.SubstringAfter("]: ");
    public static string LogLevel(this string source) => source.SubstringBetween("[", "]");
}