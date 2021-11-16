module RunLengthEncoding

open System.Text.RegularExpressions

let encode input = Regex.Replace(input, "(\D)\1+", fun (m: Match) -> (m.Length |> string) + (m.Value.[0] |> string)) // stolen from xdqc's C# solution https://exercism.org/tracks/csharp/exercises/run-length-encoding/solutions/xdqc
let decode input = Regex.Replace(input, "(\d+)(\D)", fun (m: Match) -> (m.Groups.[2].Value.[0], m.Groups.[1].Value |> int) |> System.String) // why write clever fp code ourselves when the runtime does a perfectly good job