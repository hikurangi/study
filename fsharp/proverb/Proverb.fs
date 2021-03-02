module Proverb

let recite (input: string list) =
    let rec reciter =
        function
        | ([], []) -> []
        | (poem, items) when items.Length > 1 ->
            reciter (List.append poem [ $"For want of a {items.[0]} the {items.[1]} was lost." ], List.tail items)
        | (poem, _items) -> List.append poem [ $"And all for the want of a {input.[0]}." ]

    reciter ([], input)
