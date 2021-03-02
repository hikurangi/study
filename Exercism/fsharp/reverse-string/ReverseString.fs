module ReverseString

let reverse (input: string): string =
    input
    |> List.ofSeq
    |> List.rev
    |> List.fold (fun acc it -> acc + (string it)) ""