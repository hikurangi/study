module BingoTests

open System.IO
open FsUnit.Xunit
open Xunit

open Bingo

let testInput =
    @"
7,4,9,5,11,17,23,2,0,14,21,24,10,16,13,6,15,25,12,22,18,20,8,19,3,26,1

22 13 17 11  0
 8  2 23  4 24
21  9 14 16  7
 6 10  3 18  5
 1 12 20 15 19

 3 15  0  2 22
 9 18 13 17  5
19  8  7 25 23
20 11 10 24  4
14 21 16 12  6

14 21 17 24  4
10 16 15  9 19
18  8 23 26 20
22 11 13  6  5
 2  0 12  3  7"

[<Fact>]
let ``Parses moves correctly`` () =

    let parsedMoves = parseMoves testInput |> List.ofSeq

    let expectedMoves =
        [ 7; 4; 9; 5; 11; 17; 23; 2; 0; 14; 21; 24; 10; 16; 13; 6; 15; 25; 12; 22; 18; 20; 8; 19; 3; 26; 1 ]

    parsedMoves |> should equal expectedMoves

[<Fact>]
let ``Parses boards correctly`` () =

    let parsedBoards =
        parseBoards testInput
        |> Seq.map List.ofSeq
        |> List.ofSeq

    let expectedBoards =
        [ [
            { Number = 22; Drawn = false }; { Number = 13; Drawn = false }; { Number = 17; Drawn = false }; { Number = 11; Drawn = false }; { Number = 0; Drawn = false }
            { Number = 8; Drawn = false }; { Number = 2; Drawn = false }; { Number = 23; Drawn = false }; { Number = 4; Drawn = false }; { Number = 24; Drawn = false }
            { Number = 21; Drawn = false }; { Number = 9; Drawn = false }; { Number = 14; Drawn = false }; { Number = 16; Drawn = false }; { Number = 7; Drawn = false }
            { Number = 6; Drawn = false }; { Number = 10; Drawn = false }; { Number = 3; Drawn = false }; { Number = 18; Drawn = false }; { Number = 5; Drawn = false }
            { Number = 1; Drawn = false }; { Number = 12; Drawn = false }; { Number = 20; Drawn = false }; { Number = 15; Drawn = false }; { Number = 19; Drawn = false }
          ]
          [
            { Number = 3; Drawn = false }; { Number = 15; Drawn = false }; { Number = 0; Drawn = false }; { Number = 2; Drawn = false }; { Number = 22; Drawn = false }
            { Number = 9; Drawn = false }; { Number = 18; Drawn = false }; { Number = 13; Drawn = false }; { Number = 17; Drawn = false }; { Number = 5; Drawn = false }
            { Number = 19; Drawn = false }; { Number = 8; Drawn = false }; { Number = 7; Drawn = false }; { Number = 25; Drawn = false }; { Number = 23; Drawn = false }
            { Number = 20; Drawn = false }; { Number = 11; Drawn = false }; { Number = 10; Drawn = false }; { Number = 24; Drawn = false }; { Number = 4; Drawn = false }
            { Number = 14; Drawn = false }; { Number = 21; Drawn = false }; { Number = 16; Drawn = false }; { Number = 12; Drawn = false }; { Number = 6; Drawn = false }
          ]
          [
            { Number = 14; Drawn = false }; { Number = 21; Drawn = false }; { Number = 17; Drawn = false }; { Number = 24; Drawn = false }; { Number = 4; Drawn = false }
            { Number = 10; Drawn = false }; { Number = 16; Drawn = false }; { Number = 15; Drawn = false }; { Number = 9; Drawn = false }; { Number = 19; Drawn = false }
            { Number = 18; Drawn = false }; { Number = 8; Drawn = false }; { Number = 23; Drawn = false }; { Number = 26; Drawn = false }; { Number = 20; Drawn = false }
            { Number = 22; Drawn = false }; { Number = 11; Drawn = false }; { Number = 13; Drawn = false }; { Number = 6; Drawn = false }; { Number = 5; Drawn = false }
            { Number = 2; Drawn = false }; { Number = 0; Drawn = false }; { Number = 12; Drawn = false }; { Number = 3; Drawn = false }; { Number = 7; Drawn = false }
          ] ]

    parsedBoards |> should equal expectedBoards

//[<Fact>]
//let ``Epsilon rate is calculated correctly from test data`` () =
//    let diagnosticReport =
//        @"
//        00100
//        11110
//        10110
//        10111
//        10101
//        01111
//        00111
//        11100
//        10000
//        11001
//        00010
//        01010
//        "
//
//    epsilonRate diagnosticReport |> should equal 9
//
//[<Fact>]
//let ``Multiple of Gamma and Epsilon is calculated correctly from real data`` () =
//    let diagnosticReport =
//        Path.Join(__SOURCE_DIRECTORY__, "input.txt")
//        |> File.ReadAllLines
//        |> Seq.reduce (fun state item -> state + "\n" + item)
//
//    gammaRate diagnosticReport * epsilonRate diagnosticReport |> should equal 4103154
