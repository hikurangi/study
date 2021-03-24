module DifferenceOfSquares

let square number = pown number 2

let squareOfSum number = [ 1 .. number ] |> List.sum |> square

let sumOfSquares number = [ 1 .. number ] |> List.sumBy square

let differenceOfSquares number =
    squareOfSum number - sumOfSquares number
