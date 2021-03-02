module GradeSchool

type School = Map<int, string list>

let empty = Map.empty

let add student grade (school: School) =
    match school |> Map.tryFind grade with
    | Some l -> school.Add(grade, student :: l |> List.sort)
    | None -> school.Add(grade, [ student ])

let roster school =
    school |> Map.fold (fun s _k v -> s @ v) []

let grade number school =
    school
    |> Map.tryFind number
    |> Option.defaultValue []
