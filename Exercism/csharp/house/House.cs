using System.Collections.Generic;
using System.Linq;

public static class House
{
    private static string[] _subjects = new string[]
    {
        "house that Jack built.",
        "malt that lay in",
        "rat that ate",
        "cat that killed",
        "dog that worried",
        "cow with the crumpled horn that tossed",
        "maiden all forlorn that milked",
        "man all tattered and torn that kissed",
        "priest all shaven and shorn that married",
        "rooster that crowed in the morn that woke",
        "farmer sowing his corn that kept",
        "horse and the hound and the horn that belonged to"
    };

    private static string Verse(string v, int i) => i > -1 ? Verse(new string[] { v, _subjects[i] }.Join(" the "), i - 1) : v;

    public static string Recite(int verseNumber) => Verse("This is", verseNumber - 1);

    public static string Recite(int startVerse, int endVerse) => Enumerable
      .Range(startVerse, endVerse - startVerse + 1)
      .Select(i => Recite(i)) // It's lame that the compiler can't distinguish these overloads
      .Join("\n");
}

public static class WeirdlyOmittedFromLINQ
{ // See discussion here: https://stackoverflow.com/questions/934635/is-there-a-linq-equivalent-of-string-joinstring-string
    public static string Join(this IEnumerable<string> s, string separator) => string.Join(separator, s);
}