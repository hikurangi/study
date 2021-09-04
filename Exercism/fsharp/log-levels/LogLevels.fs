module LogLevels

open System.Text.RegularExpressions

let message logLine = Regex.Match(logLine, "\]:\s+(?<message>.+)\s*").Groups.["message"].Value.Trim()
let logLevel logLine = Regex.Match(logLine, "\[(?<level>\w+)\]").Groups.["level"].Value.ToLowerInvariant()
let reformat logLine = $"{message logLine} ({logLevel logLine})"
