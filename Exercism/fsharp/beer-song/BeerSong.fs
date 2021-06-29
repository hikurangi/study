module BeerSong

let private count =
    function
    | n when n > 1 -> $"{n} bottles"
    | 1 -> "1 bottle"
    | 0 -> "No more bottles"
    | _ -> "99 bottles"

let private action =
    function
    | 1 -> "Take it down and pass it around"
    | 0 -> "Go to the store and buy some more"
    | _ -> "Take one down and pass it around"

let private verse n =
    [ $"{count n} of beer on the wall, {(count n).ToLower()} of beer."
      $"{action n}, {(count (n - 1)).ToLower()} of beer on the wall." ]

let private foldVerses state index =
    match state with
    | [] -> verse index
    | _ -> state @ [ "" ] @ verse index

let recite startBottles takeDown =
    [ startBottles .. -1 .. startBottles - takeDown + 1 ]
    |> List.fold foldVerses []
