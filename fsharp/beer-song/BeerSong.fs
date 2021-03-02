module BeerSong

let beerVerse =
    function
    | 2 ->
        [ "2 bottles of beer on the wall, 2 bottles of beer."
          "Take one down and pass it around, 1 bottle of beer on the wall." ]
    | 1 ->
        [ "1 bottle of beer on the wall, 1 bottle of beer."
          "Take it down and pass it around, no more bottles of beer on the wall." ]
    | 0 ->
        [ "No more bottles of beer on the wall, no more bottles of beer."
          "Go to the store and buy some more, 99 bottles of beer on the wall." ]
    | n ->
        [ $"{n} bottles of beer on the wall, {n} bottles of beer."
          $"Take one down and pass it around, {n - 1} bottles of beer on the wall." ]

let recite startBottles takeDown =
    [ for i = startBottles downto startBottles - (takeDown - 1) do
          if i <> startBottles then
              yield! "" :: beerVerse i
          else
              yield! beerVerse i ]
