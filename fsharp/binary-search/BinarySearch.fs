module BinarySearch

let find (input: array<'a>) value =
    let sorted = input |> Seq.sort
    sorted
      |> Seq.sort
      |> Seq.chunkBySize (input.Length / 2)
        // let rec search arr =
    // input |> Array.findIndex ((=) value) |> Some
