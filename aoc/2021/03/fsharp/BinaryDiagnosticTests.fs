module BinaryDiagnosticTests

open System.IO
open FsUnit.Xunit
open Xunit

open BinaryDiagnostic

[<Fact>]
let ``Gamma rate is calculated correctly from test data`` () =
    let diagnosticReport =
        @"
        00100
        11110
        10110
        10111
        10101
        01111
        00111
        11100
        10000
        11001
        00010
        01010
        "

    gammaRate diagnosticReport |> should equal 22
    
let ``Epsilon rate is calculated correctly from test data`` () =
    let diagnosticReport =
        @"
        00100
        11110
        10110
        10111
        10101
        01111
        00111
        11100
        10000
        11001
        00010
        01010
        "

    epsilonRate diagnosticReport |> should equal 9

//[<Fact>]
//let ``Position is calculated accurately using real data`` () =
//    let directions =
//        Path.Join(__SOURCE_DIRECTORY__, "input.txt")
//        |> File.ReadAllLines
//        |> Seq.reduce (fun state item -> state + "\n" + item)
//
//    drive directions |> should equal 1728414