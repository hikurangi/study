module GradingStudents

let gradeStudent = function
    | n when n < 38 -> n
    | n when (n + 1) % 5 = 0 -> n + 1
    | n when (n + 2) % 5 = 0 -> n + 2
    | n -> n

let gradingStudents grades = grades |> Seq.skip 1 |> Seq.map gradeStudent |> List.ofSeq