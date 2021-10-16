module PizzaPricing

type Pizza = Margherita | Formaggio | Caprese | ExtraSauce of Pizza | ExtraToppings of Pizza

let rec pizzaPrice =
    function
    | Margherita -> 7
    | Formaggio -> 10
    | Caprese -> 9
    | ExtraSauce p -> pizzaPrice p + 1
    | ExtraToppings p -> pizzaPrice p + 2

let orderPrice pizzas =
    match pizzas |> Seq.length with
    | 1 -> 3
    | 2 -> 2
    | _ -> 0
    + Seq.sumBy pizzaPrice pizzas
