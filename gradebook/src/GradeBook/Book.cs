using System;
using System.Collections.Generic;
using System.IO;

namespace GradeBook
{
  public delegate void GradeAddedDelegate(object sender, EventArgs args);

  public class NamedObject
  {
    public NamedObject(string name)
    {
      Name = name;
    }

    public string Name
    {
      get;
      set;
    }
  }

  public interface IBook
  {
    void AddGrade(double grade);
    Statistics GetStatistics();
    string Name { get; }
    event GradeAddedDelegate GradeAdded;
  }

  public abstract class Book : NamedObject, IBook
  {
    protected Book(string name) : base(name)
    {
    }

    public abstract event GradeAddedDelegate GradeAdded;
    public abstract void AddGrade(double grade);
    public abstract Statistics GetStatistics();
  }

  public class InMemoryBook : Book
  {
    private List<double> Grades;

    public InMemoryBook(string name) : base(name)
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

    public override void AddGrade(double grade)
    {
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

    public override event GradeAddedDelegate GradeAdded;

    public override Statistics GetStatistics()
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

      switch (result.Average)
      {
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

  public class DiskBook : Book
  {
    public DiskBook(string name) : base(name)
    {
      Name = name;
    }

    public override event GradeAddedDelegate GradeAdded;

    public override void AddGrade(double grade)
    {
      var writer = File.AppendText($"{Name}.txt");
      writer.WriteLine(grade);
    }

    public override Statistics GetStatistics()
    {
      throw new NotImplementedException();
    }
  }
}
