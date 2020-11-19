using System;
using System.Collections.Generic;

namespace  GradeBook
{
  public class Book
  {
    private List<double> Grades;
    public string Name;

    public Book(string name)
    {
      Grades = new List<double>();
      Name = name;
    }

    public void AddGrade(double grade)
    {
      Grades.Add(grade);
    }

    public Statistics GetStatistics()
    {
      var result = new Statistics();
      
      result.Average = 0.0;
      result.High = double.MinValue;
      result.Low = double.MaxValue;

      foreach (var grade in Grades)
      {
        result.Low = Math.Min(grade, result.Low);
        result.High = Math.Max(grade, result.High);
        result.Average += grade;
      }

      result.Average /= Grades.Count;

      return result;
    }
  }
}
