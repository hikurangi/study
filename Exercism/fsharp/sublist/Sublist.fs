module Sublist

type SublistType =
    | Equal
    | Sublist
    | Superlist
    | Unequal

let isXSublistOfY x y =
    let xLength = x |> List.length
    let yLength = y |> List.length

    [ for index, _ in
          y
          |> List.indexed
          |> List.take (yLength - xLength + 1) do
          yield (y |> List.skip index |> List.take xLength) ]
    |> List.contains x

// for each element of y
// take x-length chunks
//
//    let xLength = x |> List.length
//    let yLength = y |> List.length
//    y
//    |> List.mapi (fun idx _it -> y |> List.skip idx |> List.take xLength)
//    |> List.contains x


let sublist xs ys =
    match xs, ys with
    | x, y when x = y -> SublistType.Equal
    | [], y when y.Length > 0 -> SublistType.Sublist
    | x, [] when x.Length > 0 -> SublistType.Superlist
    | x, y when isXSublistOfY x y -> SublistType.Sublist
    | x, y when isXSublistOfY y x -> SublistType.Superlist

    //    | x, y when
//        y.Length > x.Length
//        && x
//           |> List.forall (fun xi -> y |> List.exists ((=) xi))
//        ->
//        SublistType.Sublist
    | x, y when x <> y -> SublistType.Unequal
    | _ -> failwith "UH OH"
