// Full disclosure: I have stolen this code with small modifications from this example https://exercism.io/tracks/fsharp/exercises/robot-name/solutions/a39bf22b985945de8f61d05207b78900
// I'm using this submission to record my own learning on the matter by annotating user JDygert's solution.

module RobotName

open System

type Robot = { Name: string }

// An idiomatic F# implementation of closure-based state, see https://blogs.tedneward.com/patterns/closurebasedstate-fsharp/
let generateName =

   // If the stateful 'used' variable was being reassigned, we would need to initialise it with the 'ref' keyword
  let used = Collections.Generic.HashSet()
  let r = Random()

  // TIL you can add chars together to produce another char
  let d () = '0' + char (r.Next(10))
  let c () = 'A' + char (r.Next(26))

  // unit () won't work as a param - this function is given one by Seq.initInfinite below, so it must be explcitly ignored
  let generator _ = String.Concat [ c (); c (); d (); d (); d () ]

  // This closure returns the anonymous function below which can be invoked by calling its parent scope generatedName ()
  fun () ->
      generator 
      |> Seq.initInfinite // Generate a list of candidate names using the supplied function 'generator' above
      |> Seq.find used.Add // Look in the piped sequence for a name which can successfully be added to the 'used' set above, meaning it has not been generated in this scope before

let mkRobot () = { Name = generateName () }

let name robot = robot.Name

let reset robot = { robot with Name = generateName () }