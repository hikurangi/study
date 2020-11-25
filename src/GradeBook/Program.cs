using System;

namespace GradeBook
{
  class Program
  {
    static void Main(string[] args)
    {
      var book = new Book("A gradebook");

      Console.WriteLine("Welcome to the Gradeinator Deluxe. Please enter a grade to add to the book, or press 'q' to finish.");

      var input = Console.ReadLine();

      while (input != "q") {
        if (double.TryParse(input, out double grade)) {
          book.AddGrade(grade);

        } else {
          Console.WriteLine($"{input} is not a valid grade, please try again!");

        };

        Console.WriteLine("Please enter a grade to add to the book, or press 'q' to finish.");

        input = Console.ReadLine();

      }

      var stats = book.GetStatistics();

      Console.WriteLine($"The lowest grade is {stats.Low}");
      Console.WriteLine($"The highest grade is {stats.High}");
      Console.WriteLine($"The average grade is {stats.Average:N1}");
      Console.WriteLine($"The letter grade is {stats.Letter}");
    }
  }
}