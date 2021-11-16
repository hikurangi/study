module RunLengthEncoding

open System
open System.Text.RegularExpressions

let encode =
    Regex("(.)\1*").Matches
    >> Seq.map (fun m ->
      let letter, count = m.Value.[0], m.Value.Length
      if count = 1 then $"{letter}" else $"{count}{letter}")
    >> String.concat ""

let decode =
    Regex("(\d*)(.)").Matches
    >> Seq.map ((fun m -> m.Groups.[2].Value.[0], if m.Groups.[1].Length = 0 then 1 else int m.Groups.[1].Value) >> String)
    >> String.concat ""