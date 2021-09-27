module Bandwagoner

type Coach = { Name: string; FormerPlayer: bool }
type Stats = { Wins: int; Losses: int; }
type Team = { Name: string; Coach: Coach; Stats: Stats }

let createCoach name formerPlayer = { Name = name; FormerPlayer = formerPlayer }

let createStats wins losses = { Wins = wins; Losses = losses }

let createTeam name coach stats = { Name = name; Coach = coach; Stats = stats }

let replaceCoach team coach = { team with Coach = coach }

let isSameTeam homeTeam awayTeam = homeTeam = awayTeam

let rootForTeam = function
    | { Coach = { Name = n } } when n = "Gregg Popovich" -> true
    | { Coach = { FormerPlayer = f } } when f = true -> true
    | { Name = n } when n = "Chicago Bulls" -> true
    | { Stats = { Wins = w } } when w > 59 -> true
    | { Stats = { Wins = w; Losses = l } } when l > w -> true
    | _ -> false