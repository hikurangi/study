using System;
using System.Linq;

public static class BeerSong
{

    private static string Initial(int n, bool isStart = false) => n switch
    {
        1 => "1 bottle",
        0 when isStart => "No more bottles",
        0 => "no more bottles",
        _ => $"{n} bottles"
    };

    private static string Action(int n) => n switch
    {
        1 => "Take it down and pass it around",
        0 => "Go to the store and buy some more",
        _ => "Take one down and pass it around"
    };

    private static string Remaining(int n) => n switch
    {
        > 1 => $"{n} bottles",
        1 => "1 bottle",
        0 => "no more bottles",
        _ => "99 bottles",
    };

    private static string Verse(int n) => $"{Initial(n, isStart: true)} of beer on the wall, {Initial(n)} of beer.\n{Action(n)}, {Remaining(n - 1)} of beer on the wall.";

    public static string Recite(int startBottles, int takeDown) => Enumerable
      .Range(startBottles - takeDown + 1, takeDown)
      .Reverse()
      .Aggregate("", (s, n) => s + (s == "" ? Verse(n) : "\n\n" + Verse(n)));
}