module BeerSong

let private count isStart =
    function
    | n when n > 1 -> $"{n} bottles"
    | 1 -> "1 bottle"
    | 0 when isStart -> "No more bottles"
    | 0 -> "no more bottles"
    | _ -> "99 bottles"

let private action =
    function
    | 1 -> "Take it down and pass it around"
    | 0 -> "Go to the store and buy some more"
    | _ -> "Take one down and pass it around"

let private verse n =
    [ $"{count true n} of beer on the wall, {count false n} of beer."
      $"{action n}, {count false (n - 1)} of beer on the wall." ]

let recite startBottles takeDown =
    [ for i = startBottles downto startBottles - takeDown + 1 do
          if i <> startBottles then
              yield! "" :: verse i
          else
              yield! verse i ]
