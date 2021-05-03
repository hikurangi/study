using System;
using System.Collections.Generic;

public static class RobotNames
{
  private static Random _r = new Random();
  private static char D() => (char)('0' + _r.Next(10));
  private static char L() => (char)('A' + _r.Next(26));

  private static readonly HashSet<string> _used = new HashSet<string>();

  public static string Generate()
  {
    var name = string.Concat(new List<char> { L(), L(), D(), D(), D() });

    return _used.Add(name)
      ? name
      : Generate();
  }
}

public class Robot
{
    private string _name = RobotNames.Generate();
    public string Name => _name;
    public void Reset() { _name = RobotNames.Generate(); }
}