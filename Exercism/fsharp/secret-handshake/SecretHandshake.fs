module SecretHandshake

let isSet m b = m &&& (1 <<< b) <> 0

let commands number =
    let isSetPartial = isSet number
    let result =
      [if isSetPartial 0 then "wink";
       if isSetPartial 1 then "double blink";
       if isSetPartial 2 then "close your eyes";
       if isSetPartial 3 then "jump"]
    if isSetPartial 4 then List.rev result else result

// let commands =
//     [ (1 <<< 0, (fun acc -> acc @ [ "wink" ]))
//       (1 <<< 1, (fun acc -> acc @ [ "double blink" ]))
//       (1 <<< 2, (fun acc -> acc @ [ "close your eyes" ]))
//       (1 <<< 3, (fun acc -> acc @ [ "jump" ]))
//       (1 <<< 4, (fun acc -> acc |> List.rev)) ]

// // let applyCommand number acc (mask, apply) =
// //     if number &&& mask <> 0 then apply acc
// //     else acc

// let applyCommand number acc (mask, apply) =
//     match number &&& mask <> 0 with
//     | true -> apply acc
//     | false -> acc

// let handshake number =
//     commands |> List.fold (applyCommand number) []
