module LogLevels

open System.Text.RegularExpressions

let message log = Regex.Match(log, "\]:\s+(?<message>.+)\s*").Groups.["message"].Value.Trim()
let logLevel log = Regex.Match(log, "\[(?<level>\w+)\]").Groups.["level"].Value.ToLowerInvariant()
let reformat log = $"{message log} ({logLevel log})"
