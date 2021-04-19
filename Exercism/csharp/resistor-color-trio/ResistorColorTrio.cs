using System;

public enum Colors { Black = 0, Brown = 1, Red = 2, Orange = 3, Yellow = 4, Green = 5, Blue = 6, Violet = 7, Grey = 8, White = 9 }

public class ResistorColorTrio
{
  private static int GetValue(string color) => (int)Enum.Parse<Colors>(color, true);

  private static int GetTotalResistance(string[] colors) =>
    (int)(Math.Pow(10, GetValue(colors[2]))) * (GetValue(colors[0]) * 10 + GetValue(colors[1]));

  public static string Label(string[] colors)
  {
    var resistance = GetTotalResistance(colors);
    return resistance > 1000 ? $"{resistance / 1000} kiloohms" : $"{resistance} ohms";
  }
}