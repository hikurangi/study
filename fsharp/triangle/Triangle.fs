module Triangle

let countUniqueElems i = i |> Set.ofSeq |> Set.count

let isTriangleInequalityViolation t =
    let sorted = t |> Seq.sortDescending
    let largest = sorted |> Seq.head
    let remainder = sorted |> Seq.tail |> Seq.sum
    remainder < largest

let equilateral triangle =
    0. <> List.average triangle
    && 1 = countUniqueElems triangle

let isosceles triangle =
    (2 = countUniqueElems triangle
     || equilateral triangle)
    && not (isTriangleInequalityViolation triangle)

let scalene triangle =
    (3 = countUniqueElems triangle)
    && not (isTriangleInequalityViolation triangle)
