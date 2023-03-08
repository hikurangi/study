module BookStore

let allUnique books =
    books |> Set.ofSeq |> Set.count = (books |> Seq.length)

let getDiscount books =
    match books |> allUnique, books |> Seq.length with
    | true, 2 -> 0.05m
    | true, 3 -> 0.1m
    | true, 4 -> 0.2m
    | true, 5 -> 0.25m
    | _ -> 0m

let pricePerBook = 8.00m

let tally books =
    books
    |> Seq.groupBy id
    |> Seq.map (fun (k, v) -> k, v |> Seq.length)

let getDiscountedTotal books =
    let undiscountedPrice = (books |> Seq.length |> decimal) * 8m

    undiscountedPrice
    - ((books |> getDiscount) * undiscountedPrice)

// let rec generateSeries books : list<list<int>> =
let bookFolder (state: list<list<int>>) (book, count) =
    // kick things off
    if state |> List.length = 0 then
        [ 1 .. count ] |> List.map (fun _ -> [ book ])
    else
        let listsToBeAltered = state |> List.take count
        let remainingLists = state |> List.skip count

        let alteredLists =
            listsToBeAltered
            |> List.map (fun l -> l @ [ book ])

        alteredLists @ remainingLists

let total books =
    // 1. group books by count of each item. this sequence must be sorted
    let countedBooks = books |> tally |> Seq.sort

    // 2. generate series from these groups of books. Do this by:
    // - iterating through the sequence of books, from lowest to highest.
    let series = countedBooks |> Seq.fold bookFolder []

    // - grabbing a book from each group
    // - returning when no books higher are left

    // let result = generateSeries [] countedBooks


    books |> getDiscountedTotal
