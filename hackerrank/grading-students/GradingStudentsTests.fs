module GradingStudentsTests

open FsUnit.Xunit
open Xunit

open GradingStudents

[<Fact>]
let ``It grades students successfully`` () =
    gradingStudents [4; 73; 67; 38; 33] |> should equal [75; 67; 40; 33]