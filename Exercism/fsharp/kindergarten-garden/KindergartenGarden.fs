module KindergartenGarden

type Plant =
    | Radishes
    | Clover
    | Grass
    | Violets

let plants diagram student =
    (diagram.ToString().Split('\n'))
    |> Seq.collect (
        Seq.chunkBySize 2
        >> Seq.item (((string student).[0] |> int) - int 'A')
        >> Seq.map
            (function
            | 'R' -> Radishes
            | 'C' -> Clover
            | 'G' -> Grass
            | 'V' -> Violets
            | _ -> failwith "Invalid plant type specified")
    )
    |> List.ofSeq
