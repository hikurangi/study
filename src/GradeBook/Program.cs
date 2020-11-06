using System;
using System.Collections.Generic;
using GradeBook;

namespace GradeBook
{
  class Program
  {
    static void Main(string[] args)
    {

      var book = new Book();

      var grades = new List<double>() { 12.7, 10.3, 6.11, 4.1 };
      grades.Add(56.1);

      var result = 0.0;
      foreach (var number in grades)
      {
        result += number;
      }
      result /= grades.Count;

      if (args.Length > 0)
      {
        Console.WriteLine($"Hello {args[0]}!");
      }
      else
      {
        Console.WriteLine("Hello!");
      }
    }
  }
}
