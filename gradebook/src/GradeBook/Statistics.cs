using System;
using System.Collections.Generic;

namespace GradeBook
{
  public class Statistics
  {
    public Statistics(List<double> grades)
    {
      for (var i = 0; i < grades.Count; i++)
      {
        var grade = grades[i];
        Low = Math.Min(grade, Low);
        High = Math.Max(grade, High);
        Average += grade;
      }
      Average /= grades.Count;

      switch (Average)
      {
        case var d when d >= 90.0:
          Letter = 'A';
          break;

        case var d when d >= 80.0:
          Letter = 'B';
          break;

        case var d when d >= 70.0:
          Letter = 'C';
          break;

        case var d when d >= 60.0:
          Letter = 'D';
          break;

        default:
          Letter = 'F';
          break;
      }
    }
    public double Average = 0.0;
    public double High = double.MinValue;
    public double Low = double.MaxValue;
    public char Letter;
  }
}