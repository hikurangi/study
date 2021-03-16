using System.Collections.Generic;

public static class ResistorColor
{
    private readonly static List<string> _colors = new List<string> { "black", "brown", "red", "orange", "yellow", "green", "blue", "violet", "grey", "white" };

    public static List<string> Colors() => new List<string>(_colors); // Returns a clone, not a reference to the original

    public static int ColorCode(string color) => Colors().IndexOf(color);
}