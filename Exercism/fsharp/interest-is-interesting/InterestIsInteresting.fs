module InterestIsInteresting

let interestRate =
    function
    | b when b < 0m -> 3.213f
    | b when b < 1_000m -> 0.5f
    | b when b < 5_000m -> 1.621f
    | _ -> 2.475f

let interest amount = (amount |> interestRate |> decimal) * amount / 100m

let annualBalanceUpdate balance = (balance |> interest) + balance

let amountToDonate (balance: decimal) (taxFreePercentage: float) =
    if balance < 0m then 0
    else balance * (taxFreePercentage |> decimal) / 50m |> int
