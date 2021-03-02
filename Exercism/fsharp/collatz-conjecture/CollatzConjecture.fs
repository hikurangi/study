module CollatzConjecture

let rec steps' count =
    function
    | n when n < 1 -> None
    | 1 -> Some count
    | n when n % 2 = 0 -> steps' (count + 1) (n / 2)
    | n -> steps' (count + 1) (3 * n + 1)

let steps number = steps' 0 number
