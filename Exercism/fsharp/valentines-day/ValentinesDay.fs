module ValentinesDay

type Approval =
    | Yes
    | No
    | Maybe

type Cuisine =
    | Korean
    | Turkish

type Genre =
    | Crime
    | Horror
    | Romance
    | Thriller

type Activity =
    | BoardGame
    | Chill
    | Movie of Genre
    | Restaurant of Cuisine
    | Walk of int

let rateActivity =
    function
    | BoardGame
    | Chill -> No
    | Movie m ->
        match m with
        | Crime | Horror | Thriller -> No
        | Romance -> Yes
    | Restaurant r ->
        match r with
        | Korean -> Yes
        | Turkish -> Maybe
    | Walk d ->
        match d with
          | d when d > -1 && d < 3 -> Yes
          | d when d > -1 && d < 5 -> Maybe
          | _ -> No