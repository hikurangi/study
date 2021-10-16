module PizzaPricing

type Pizza =
    | Margherita
    | Formaggio
    | Caprese
    | ExtraSauce of Pizza
    | ExtraToppings of Pizza

let rec pizzaPrice =
    function
    | Margherita -> 7
    | Formaggio -> 10
    | Caprese -> 9
    | ExtraSauce p -> pizzaPrice p + 1
    | ExtraToppings p -> pizzaPrice p + 2

let orderPrice pizzas =
    let rec orderPrice' price pizzas' =
        match price, pizzas' with
        | p, [] -> p
        | p, h :: t -> orderPrice' (p + pizzaPrice h) t

    let markup =
        match pizzas |> List.length with
        | 1 -> 3
        | 2 -> 2
        | c when c = 0 || c > 2 -> 0
        | _ -> failwith "invalid number of pizzas ordered"

    orderPrice' markup pizzas
