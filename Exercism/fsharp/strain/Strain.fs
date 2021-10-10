module Seq

let keep pred xs =
    let rec run acc =
      function 
      | [] -> Seq.rev acc
      | h::t when pred h -> run (h::acc) t
      | _h::t -> run acc t

    run [] xs

let discard pred xs =
    failwith "You need to implement this function."