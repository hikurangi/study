module InterestIsInteresting

let interestRate = function
  | b when b < 0m -> -3.213f
  | b when b < 1_000m -> 0.5f
  | b when b < 5_000m -> 1.621f
  | _ -> 2.475f

let annualBalanceUpdate balance =
  let interestPercentage' = (balance |> interestRate |> decimal) / 100m
  balance + (interestPercentage' * balance) 

let amountToDonate(balance: decimal) (taxFreePercentage: float): int =
  match (float balance * taxFreePercentage / 50.) |> int with
    | a when a > 0 -> a
    | _ -> 0
