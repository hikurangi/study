module Meetup

open System

type Week = First | Second | Third | Fourth | Last | Teenth

let meetup year month week dayOfWeek =
    let days =
        [| for day in 1 .. (year, month) |> DateTime.DaysInMonth do
               let date = (year, month, day) |> DateTime

               if date.DayOfWeek = dayOfWeek then
                   yield date |]

    match week with
    | First -> days |> Array.item 0
    | Second -> days |> Array.item 1
    | Third -> days |> Array.item 2
    | Fourth -> days |> Array.item 3
    | Last -> days |> Array.last
    | Teenth ->
        days
        |> Array.find (fun date -> date.Day > 12 && date.Day < 20)
