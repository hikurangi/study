using System;
using System.Text.RegularExpressions;

static class LogLine
{   
    public static string Message(string logLine) => new Regex(@"\s+(?<message>[\w\s]+)").Match(logLine).Groups["message"].Value.Trim();
    public static string LogLevel(string logLine) => new Regex(@"\[(?<level>\w+)\]").Match(logLine).Groups["level"].Value.ToLowerInvariant();
    public static string Reformat(string logLine) => $"{Message(logLine)} ({LogLevel(logLine)})";
}