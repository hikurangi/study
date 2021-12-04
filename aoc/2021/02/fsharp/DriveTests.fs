module DriveTests

open FsUnit.Xunit
open Xunit

open Drive

[<Fact>]
let ``Position is calculated accurately using test data`` () =
    let directions =
        @"
        forward 5
        down 5
        forward 8
        up 3
        down 8
        forward 2
        "

    drive directions |> should equal 150
