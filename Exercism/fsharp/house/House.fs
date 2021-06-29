module House

let private subjects =
    [ "house that Jack built."
      "malt that lay in"
      "rat that ate"
      "cat that killed"
      "dog that worried"
      "cow with the crumpled horn that tossed"
      "maiden all forlorn that milked"
      "man all tattered and torn that kissed"
      "priest all shaven and shorn that married"
      "rooster that crowed in the morn that woke"
      "farmer sowing his corn that kept"
      "horse and the hound and the horn that belonged to" ]

let rec private verse v =
    function
    | i when i > -1 -> verse ([ v; subjects.[i] ] |> String.concat " the ") (i - 1)
    | _ -> v

let recite startVerse endVerse =
    [ startVerse - 1 .. endVerse - 1 ]
    |> List.map (verse "This is")
