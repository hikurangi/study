using System;
using System.Collections.Generic;
using System.Linq;

public static class BeerSong
{
    private static string Count(int n, bool isStart = false) => n switch
    {
        > 1 => $"{n} bottles",
        1 => "1 bottle",
        0 when isStart => "No more bottles",
        0 => "no more bottles",
        < 0 => "99 bottles"
    };

    private static string Action(int n) => n switch
    {
        1 => "Take it down and pass it around",
        0 => "Go to the store and buy some more",
        _ => "Take one down and pass it around"
    };

    private static string Verse(int n) => $"{Count(n, isStart: true)} of beer on the wall, {Count(n)} of beer.\n{Action(n)}, {Count(n - 1)} of beer on the wall.";

    public static string Recite(int startBottles, int takeDown) => Enumerable
      .Range(startBottles - takeDown + 1, takeDown)
      .Reverse()
      .Select(Verse)
      .Join("\n\n");  
}

public static class WeirdlyOmittedFromLINQ { // See discussion here: https://stackoverflow.com/questions/934635/is-there-a-linq-equivalent-of-string-joinstring-string
    public static string Join(this IEnumerable<string> s, string separator) => string.Join(separator, s);
}