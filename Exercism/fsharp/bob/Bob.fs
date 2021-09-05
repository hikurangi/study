module Bob

let (|Silence|_|) (s: string) = if s |> Seq.isEmpty then Some Silence else None
let (|Shouting|_|) (s: string) = if s.ToUpperInvariant() = s && s |> Seq.exists System.Char.IsLetter then Some Shouting else None
let (|Question|_|) (s: string) = if s |> Seq.tryLast = Some '?' then Some Question else None

let response (s: string) =
    match s.Trim() with
      | Question & Shouting -> "Calm down, I know what I'm doing!"
      | Shouting -> "Whoa, chill out!"
      | Question -> "Sure."
      | Silence -> "Fine. Be that way!"
      | _ -> "Whatever."
