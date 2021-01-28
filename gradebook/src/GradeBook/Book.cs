using System;
using System.Collections.Generic;

namespace GradeBook
{
  public delegate void GradeAddedDelegate(object sender, EventArgs args);

  public class Book
  {
    private List<double> Grades;
    public string Name;

    public Book(string name)
    {
      Grades = new List<double>();
      Name = name;
    }

    public void AddGrade(char letter)
    {
      switch (letter)
      {
        case 'A': 
          AddGrade(90);
          break;

        case 'B':
          AddGrade(80);
          break;

        case 'C':
          AddGrade(70);
          break;

        default:
          AddGrade(0);
          break;
      }
    }

    public void AddGrade(double grade)
    {
      // Validation "layer"
      if (grade <= 100 && grade >= 0)
      {
        Grades.Add(grade);

        if (GradeAdded != null)
        {
          GradeAdded(this, new EventArgs());
        }
      }
      else
      {
        throw new ArgumentException($"Invalid {nameof(grade)}");
      }
    }

    public event GradeAddedDelegate GradeAdded;

    public Statistics GetStatistics()
    {
      var result = new Statistics();

      result.Average = 0.0;
      result.High = double.MinValue;
      result.Low = double.MaxValue;

      for (var i = 0; i < Grades.Count; i++)
      {
        var grade = Grades[i];

        result.Low = Math.Min(grade, result.Low);
        result.High = Math.Max(grade, result.High);
        result.Average += grade;
      }

      result.Average /= Grades.Count;

      switch(result.Average) {
        case var d when d >= 90.0:
          result.Letter = 'A';
          break;

        case var d when d >= 80.0:
          result.Letter = 'B';
          break;

        case var d when d >= 70.0:
          result.Letter = 'C';
          break;

        case var d when d >= 60.0:
          result.Letter = 'D';
          break;
          
        default:
          result.Letter = 'F';
          break;
      }

      return result;
    }
  }
}
