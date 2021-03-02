module TwoFer

let twoFer (input: string option): string = 
    match input with
    | Some text -> sprintf "One for %s, one for me." text
    | _ -> "One for you, one for me."
    // input
    // |> Option.defaultValue "you"
    // |> sprintf "One for %s, one for me."
