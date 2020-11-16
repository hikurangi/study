using System;
using System.Collections.Generic;

namespace  GradeBook
{
  class Book
  {
    private List<double> Grades;
    private string Name;

    public Book(string name)
    {
      Grades = new List<double>();
      this.Name = name;
    }

    public void AddGrade(double grade)
    {
      Grades.Add(grade);
    }

    public void ShowStatistics()
    {
      var result = 0.0;
      var highGrade = double.MinValue;
      var lowGrade = double.MaxValue;

      foreach (var number in Grades)
      {
        lowGrade = Math.Min(number, lowGrade);
        highGrade = Math.Max(number, highGrade);
        result += number;
      }

      result /= Grades.Count;
      
      Console.WriteLine($"The lowest grade is {lowGrade}");
      Console.WriteLine($"The highest grade is {highGrade}");
      Console.WriteLine($"The average grade is {result:N1}");
    }
  }
}
