using System.Collections.Generic;

public static class ResistorColor
{
    static ResistorColor()
    {
      _colors = new List<string> { "black", "brown", "red", "orange", "yellow", "green", "blue", "violet", "grey", "white" };
    }

    private static List<string> _colors;

    public static List<string> Colors() => _colors;

    public static int ColorCode(string color) => Colors().IndexOf(color);
}