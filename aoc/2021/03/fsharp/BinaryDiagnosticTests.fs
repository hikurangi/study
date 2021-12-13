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

[<Fact>]
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

[<Fact>]
let ``Multiple of Gamma and Epsilon is calculated correctly from real data`` () =
    let diagnosticReport =
        Path.Join(__SOURCE_DIRECTORY__, "input.txt")
        |> File.ReadAllLines
        |> Seq.reduce (fun state item -> state + "\n" + item)
        
    gammaRate diagnosticReport * epsilonRate diagnosticReport |> should equal 4103154

[<Fact>]
let ``Oxygen generator rating is calculated correctly from test data`` () =
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
        
    oxygenGeneratorRating diagnosticReport |> should equal 23
    
[<Fact>]
let ``C02 scrubber rating is calculated correctly from test data`` () =
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
        
    c02ScrubberRating diagnosticReport |> should equal 10
    
[<Fact>]
let ``Multiple of oxygen generator rating and CO2 scrubber rating is calculated correctly from real data`` () =
    let diagnosticReport =
        Path.Join(__SOURCE_DIRECTORY__, "input.txt")
        |> File.ReadAllLines
        |> Seq.reduce (fun state item -> state + "\n" + item)
        
    oxygenGeneratorRating diagnosticReport * c02ScrubberRating diagnosticReport |> should equal 4245351