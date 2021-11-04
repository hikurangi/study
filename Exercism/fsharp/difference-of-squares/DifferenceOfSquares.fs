module DifferenceOfSquares

let square number = pown number 2

let squareOfSum number = seq { 1 .. number } |> Seq.sum |> square

let sumOfSquares number = seq { 1 .. number } |> Seq.sumBy square

let differenceOfSquares number =
    squareOfSum number - sumOfSquares number
