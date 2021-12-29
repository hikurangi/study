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

let unwrapBingo = (function Remaining (b, _) -> b | Winners (b, _) -> b) >> Seq.map List.ofSeq >> List.ofSeq

[<Fact>]
let ``Parses calls correctly`` () =
    parseCalls testInput |> should equal [ 7; 4; 9; 5; 11; 17; 23; 2; 0; 14; 21; 24; 10; 16; 13; 6; 15; 25; 12; 22; 18; 20; 8; 19; 3; 26; 1 ]

[<Fact>]
let ``Parses boards correctly`` () =
    let expectedBoards =
        [
            [
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
            ]
        ]

    parseBoards testInput |> Seq.map List.ofSeq |> List.ofSeq |> should equal expectedBoards

[<Fact>]
let ``After the first five numbers are drawn, the boards look like this`` () =

    let expectedResult =
        Remaining (seq {
            seq {
                { Number = 22; Drawn = false }; { Number = 13; Drawn = false }; { Number = 17; Drawn = false }; { Number = 11; Drawn = true }; { Number = 0; Drawn = false }
                { Number = 8; Drawn = false }; { Number = 2; Drawn = false }; { Number = 23; Drawn = false }; { Number = 4; Drawn = true }; { Number = 24; Drawn = false }
                { Number = 21; Drawn = false }; { Number = 9; Drawn = true }; { Number = 14; Drawn = false }; { Number = 16; Drawn = false }; { Number = 7; Drawn = true }
                { Number = 6; Drawn = false }; { Number = 10; Drawn = false }; { Number = 3; Drawn = false }; { Number = 18; Drawn = false }; { Number = 5; Drawn = true }
                { Number = 1; Drawn = false }; { Number = 12; Drawn = false }; { Number = 20; Drawn = false }; { Number = 15; Drawn = false }; { Number = 19; Drawn = false }
            }
            seq {
                { Number = 3; Drawn = false }; { Number = 15; Drawn = false }; { Number = 0; Drawn = false }; { Number = 2; Drawn = false }; { Number = 22; Drawn = false }
                { Number = 9; Drawn = true }; { Number = 18; Drawn = false }; { Number = 13; Drawn = false }; { Number = 17; Drawn = false }; { Number = 5; Drawn = true }
                { Number = 19; Drawn = false }; { Number = 8; Drawn = false }; { Number = 7; Drawn = true }; { Number = 25; Drawn = false }; { Number = 23; Drawn = false }
                { Number = 20; Drawn = false }; { Number = 11; Drawn = true }; { Number = 10; Drawn = false }; { Number = 24; Drawn = false }; { Number = 4; Drawn = true }
                { Number = 14; Drawn = false }; { Number = 21; Drawn = false }; { Number = 16; Drawn = false }; { Number = 12; Drawn = false }; { Number = 6; Drawn = false }
            }
            seq {
                { Number = 14; Drawn = false }; { Number = 21; Drawn = false }; { Number = 17; Drawn = false }; { Number = 24; Drawn = false }; { Number = 4; Drawn = true }
                { Number = 10; Drawn = false }; { Number = 16; Drawn = false }; { Number = 15; Drawn = false }; { Number = 9; Drawn = true }; { Number = 19; Drawn = false }
                { Number = 18; Drawn = false }; { Number = 8; Drawn = false }; { Number = 23; Drawn = false }; { Number = 26; Drawn = false }; { Number = 20; Drawn = false }
                { Number = 22; Drawn = false }; { Number = 11; Drawn = true }; { Number = 13; Drawn = false }; { Number = 6; Drawn = false }; { Number = 5; Drawn = true }
                { Number = 2; Drawn = false }; { Number = 0; Drawn = false }; { Number = 12; Drawn = false }; { Number = 3; Drawn = false }; { Number = 7; Drawn = true }
            }
        }, 11)
    
    testInput |> parseBoards |> runCalls [7; 4; 9; 5; 11 ] 0 |> unwrapBingo |> should equal (expectedResult |> unwrapBingo)

[<Fact>]
let ``After the first eleven numbers are drawn, the boards look like this`` () =
    let expectedResult =
        Remaining (seq {
            seq {
                { Number = 22; Drawn = false }; { Number = 13; Drawn = false }; { Number = 17; Drawn = true }; { Number = 11; Drawn = true }; { Number = 0; Drawn = true }
                { Number = 8; Drawn = false }; { Number = 2; Drawn = true }; { Number = 23; Drawn = true }; { Number = 4; Drawn = true }; { Number = 24; Drawn = false }
                { Number = 21; Drawn = true }; { Number = 9; Drawn = true }; { Number = 14; Drawn = true }; { Number = 16; Drawn = false }; { Number = 7; Drawn = true }
                { Number = 6; Drawn = false }; { Number = 10; Drawn = false }; { Number = 3; Drawn = false }; { Number = 18; Drawn = false }; { Number = 5; Drawn = true }
                { Number = 1; Drawn = false }; { Number = 12; Drawn = false }; { Number = 20; Drawn = false }; { Number = 15; Drawn = false }; { Number = 19; Drawn = false }
            }
            seq {
                { Number = 3; Drawn = false }; { Number = 15; Drawn = false }; { Number = 0; Drawn = true }; { Number = 2; Drawn = true }; { Number = 22; Drawn = false }
                { Number = 9; Drawn = true }; { Number = 18; Drawn = false }; { Number = 13; Drawn = false }; { Number = 17; Drawn = true }; { Number = 5; Drawn = true }
                { Number = 19; Drawn = false }; { Number = 8; Drawn = false }; { Number = 7; Drawn = true }; { Number = 25; Drawn = false }; { Number = 23; Drawn = true }
                { Number = 20; Drawn = false }; { Number = 11; Drawn = true }; { Number = 10; Drawn = false }; { Number = 24; Drawn = false }; { Number = 4; Drawn = true }
                { Number = 14; Drawn = true }; { Number = 21; Drawn = true }; { Number = 16; Drawn = false }; { Number = 12; Drawn = false }; { Number = 6; Drawn = false }
            }
            seq {
                { Number = 14; Drawn = true }; { Number = 21; Drawn = true }; { Number = 17; Drawn = true }; { Number = 24; Drawn = false }; { Number = 4; Drawn = true }
                { Number = 10; Drawn = false }; { Number = 16; Drawn = false }; { Number = 15; Drawn = false }; { Number = 9; Drawn = true }; { Number = 19; Drawn = false }
                { Number = 18; Drawn = false }; { Number = 8; Drawn = false }; { Number = 23; Drawn = true }; { Number = 26; Drawn = false }; { Number = 20; Drawn = false }
                { Number = 22; Drawn = false }; { Number = 11; Drawn = true }; { Number = 13; Drawn = false }; { Number = 6; Drawn = false }; { Number = 5; Drawn = true }
                { Number = 2; Drawn = true }; { Number = 0; Drawn = true }; { Number = 12; Drawn = false }; { Number = 3; Drawn = false }; { Number = 7; Drawn = true }
            }
        }, 21)

    testInput |> parseBoards |> runCalls [ 7; 4; 9; 5; 11; 17; 23; 2; 0; 14; 21 ] 0 |> unwrapBingo |> should equal (expectedResult |> unwrapBingo)

[<Fact>]
let ``After twelve numbers are are drawn, there is a horizontal winner`` () =
    let winners = // actually just one in a nested sequence
        Winners (seq {
            seq {
                { Number = 14; Drawn = true }; { Number = 21; Drawn = true }; { Number = 17; Drawn = true }; { Number = 24; Drawn = true }; { Number = 4; Drawn = true }
                { Number = 10; Drawn = false }; { Number = 16; Drawn = false }; { Number = 15; Drawn = false }; { Number = 9; Drawn = true }; { Number = 19; Drawn = false }
                { Number = 18; Drawn = false }; { Number = 8; Drawn = false }; { Number = 23; Drawn = true }; { Number = 26; Drawn = false }; { Number = 20; Drawn = false }
                { Number = 22; Drawn = false }; { Number = 11; Drawn = true }; { Number = 13; Drawn = false }; { Number = 6; Drawn = false }; { Number = 5; Drawn = true }
                { Number = 2; Drawn = true }; { Number = 0; Drawn = true }; { Number = 12; Drawn = false }; { Number = 3; Drawn = false }; { Number = 7; Drawn = true }
            }
        }, 24)

    testInput |> parseBoards |> runCalls [ 7; 4; 9; 5; 11; 17; 23; 2; 0; 14; 21; 24 ] 0 |> unwrapBingo |> should equal (winners |> unwrapBingo)

[<Fact>]
let ``Can win with a vertical line`` () =
    let winners =
        Winners (seq {
            seq {
                { Number = 3; Drawn = false }; { Number = 15; Drawn = false }; { Number = 0; Drawn = true }; { Number = 2; Drawn = true }; { Number = 22; Drawn = true }
                { Number = 9; Drawn = true }; { Number = 18; Drawn = false }; { Number = 13; Drawn = false }; { Number = 17; Drawn = true }; { Number = 5; Drawn = true }
                { Number = 19; Drawn = false }; { Number = 8; Drawn = true }; { Number = 7; Drawn = true }; { Number = 25; Drawn = false }; { Number = 23; Drawn = true }
                { Number = 20; Drawn = false }; { Number = 11; Drawn = true }; { Number = 10; Drawn = false }; { Number = 24; Drawn = false }; { Number = 4; Drawn = true }
                { Number = 14; Drawn = true }; { Number = 21; Drawn = true }; { Number = 16; Drawn = false }; { Number = 12; Drawn = false }; { Number = 6; Drawn = true }
            }
        }, 26)

    testInput |> parseBoards |> runCalls [ 7; 4; 9; 5; 11; 17; 23; 2; 0; 14; 22; 21; 8; 6; ] 0 |> unwrapBingo |> should equal (winners |> unwrapBingo)

[<Fact>]
let ``Winning score is calculated accurately from test input`` () =
    testInput |> parseBoards |> runCalls [ 7; 4; 9; 5; 11; 17; 23; 2; 0; 14; 21; 24 ] 0
    |> score |> should equal 4512

[<Fact>]
let ``Winning board score is calculated accurately from real data`` () =
    let input =
        Path.Join(__SOURCE_DIRECTORY__, "input.txt")
        |> File.ReadAllLines
        |> Seq.reduce (fun state item -> state + "\n" + item)

    let calls = input |> parseCalls
    let boards = input |> parseBoards

    boards |> runCalls calls 0 |> score |> should equal 25410 // 26136
