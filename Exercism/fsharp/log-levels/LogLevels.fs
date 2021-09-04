module LogLevels

open System.Text.RegularExpressions

type Log = { Level: string; Message: string }

let format log =
    { Level = Regex.Match(log, "\[(?<level>\w+)\]").Groups.["level"].Value.ToLowerInvariant()
      Message = Regex.Match(log, "\]:\s+(?<message>.+)\s*").Groups.["message"].Value.Trim() }

let message = format >> fun l -> l.Message
let logLevel = format >> fun l -> l.Level
let reformat = format >> fun l -> $"{l.Message} ({l.Level})"
