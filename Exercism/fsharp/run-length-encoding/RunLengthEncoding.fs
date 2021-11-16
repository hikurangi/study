module RunLengthEncoding

open System.Text.RegularExpressions

// stolen from xdqc's C# solution https://exercism.org/tracks/csharp/exercises/run-length-encoding/solutions/xdqc
let encode input = Regex.Replace(input, "(\D)\1+", fun (m: Match) -> (m.Length |> string) + (m.Value[0] |> string))
// What's better than writing minimal fp code is letting the damn runtime do it.
let decode input = Regex.Replace(input, "(\d+)(\D)", fun (m: Match) -> (m.Groups[2].Value[0], m.Groups[1].Value |> int) |> System.String)