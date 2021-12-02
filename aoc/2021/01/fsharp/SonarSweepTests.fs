module SonarSweepTests

open System.IO
open FsUnit.Xunit
open Xunit

open SonarSweep

[<Fact>]
let ``Sweep counts increasing depths accurately using test data`` () =
    let depths =
        @"
        199
        200
        208
        210
        200
        207
        240
        269
        260
        263
        "

    sweep depths |> should equal 7

[<Fact>]
let ``Sweep counts increasing depths accurately using real data`` () =
    let depths =
        Path.Join(__SOURCE_DIRECTORY__, "input.txt")
        |> File.ReadAllLines
        |> Seq.reduce (fun state item -> state + "\n" + item)

    sweep depths |> should equal 1462

[<Fact>]
let ``Windowed sweep counts increasing depths accurately using test data`` () =
    let depths =
        @"
        199
        200
        208
        210
        200
        207
        240
        269
        260
        263
        "

    windowedSweep depths |> should equal 5

[<Fact>]
let ``Windowed sweep counts increasing depths accurately using real data`` () =
    let depths =
        Path.Join(__SOURCE_DIRECTORY__, "input.txt")
        |> File.ReadAllLines
        |> Seq.reduce (fun state item -> state + "\n" + item)

    windowedSweep depths |> should equal 1497