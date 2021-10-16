﻿using System;

namespace GradeBook
{
  class Program
  {
    static void Main(string[] args)
    {
      IBook book = new DiskBook("A gradebook");
      book.GradeAdded += OnGradeAdded;

      EnterGrades(book);

      var stats = book.GetStatistics();

      Console.WriteLine($"For the book named {book.Name}");
      Console.WriteLine($"The lowest grade is {stats.Low}");
      Console.WriteLine($"The highest grade is {stats.High}");
      Console.WriteLine($"The average grade is {stats.Average:N1}");
      Console.WriteLine($"The letter grade is {stats.Letter}");
    }

    private static void EnterGrades(IBook book)
    {
      while (true)
      {
        Console.WriteLine("Welcome to the Gradeinator Deluxe. Please enter a grade to add to the book, or press 'q' to finish.");

        var input = Console.ReadLine();

        if (input == "q")
        {
          break;
        }

        try
        {
          var grade = double.Parse(input);
          book.AddGrade(grade);
        }
        catch (ArgumentException ex)
        {
          Console.WriteLine(ex.Message);
        }
        catch (FormatException ex)
        {
          Console.WriteLine(ex.Message);
        }
        finally
        {
          Console.WriteLine("**");
        }
      }
    }

    static void OnGradeAdded(object sender, EventArgs e)
    {
      Console.WriteLine("A grade was added.");
    }
  }
}