using System;
using System.Collections.Generic;
using System.Linq;

public enum Plant { Violets = 'V', Radishes = 'R', Clover = 'C', Grass = 'G' }

public class KindergartenGarden
{
    private enum Student { Alice, Bob, Charlie, David, Eve, Fred, Ginny, Harriet, Ileana, Joseph, Kincaid, Larry };
    
    private readonly IEnumerable<string> _gardenRows;

    public KindergartenGarden(string diagram)
    {
        _gardenRows = diagram.Split('\n');
    }

    public IEnumerable<Plant> Plants(string student) =>
      _gardenRows.SelectMany(row => Enumerable
          .Range((int)Enum.Parse(typeof(Student), student) * 2, 2)
          .Select(index => (Plant)row[index])
      );
}