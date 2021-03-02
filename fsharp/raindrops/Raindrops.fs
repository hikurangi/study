module Raindrops

let convert (number: int): string =
    [ (3, "Pling")
      (5, "Plang")
      (7, "Plong") ]
    |> List.filter (fun (v, _) -> number % v = 0)
    |> List.map snd
    |> function
    | l when l.Length = 0 -> string number
    | l -> System.String.Concat l