module Meetup

open System

type Week = First | Second | Third | Fourth | Last | Teenth

let meetup year month week dayOfWeek : DateTime =
    let days =
        [| for day in 1 .. (year, month) |> DateTime.DaysInMonth do
               let date = (year, month, day) |> DateTime

               if date.DayOfWeek = dayOfWeek then
                   yield date |]

    match week with
    | First -> days |> Seq.item 0
    | Second -> days |> Seq.item 1
    | Third -> days |> Seq.item 2
    | Fourth -> days |> Seq.item 3
    | Last -> days |> Seq.last
    | Teenth ->
        days
        |> Seq.find (fun date -> date.Day > 12 && date.Day < 20)
