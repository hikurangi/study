using System;
using System.Collections.Generic;

public class Robot
{
    // this must be static so all robots register their name
    private static readonly HashSet<string> _usedNames = new HashSet<string>();
    private static Random _random = new Random();
    
    private static char D() => (char)('0' + _random.Next(10));
    private static char L() => (char)('A' + _random.Next(26));

    private static string GenerateName()
    {
        var name = string.Concat(new List<char> { L(), L(), D(), D(), D() });
        return _usedNames.Add(name)
          ? name
          : GenerateName();
    }

    private string _name = GenerateName();
    public string Name => _name;

    public void Reset() { _name = GenerateName(); }
}