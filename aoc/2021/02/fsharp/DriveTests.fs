module DriveTests

open System.IO
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

[<Fact>]
let ``Position is calculated accurately using real data`` () =
    let directions =
        Path.Join(__SOURCE_DIRECTORY__, "input.txt")
        |> File.ReadAllLines
        |> Seq.reduce (fun state item -> state + "\n" + item)

    drive directions |> should equal 1728414
    
[<Fact>]
let ``Position is calculated accurately with new navigation approach, using test data`` () =
    let directions =
        @"
        forward 5
        down 5
        forward 8
        up 3
        down 8
        forward 2
        "

    updatedDrive directions |> should equal 900