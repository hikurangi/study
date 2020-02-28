using System;

namespace HiLow
{
  class Program
  {
    // TODO: instantiate class with basically all of these as parameters
    // for testing, but also for the good stuff
    private static Int16 min = 0;
    private static Int16 max = 100;
    private static string guess = "";
    private static Int16 parsedGuess;
    // instantiate Random separately so we don't run into 'random' duplicates
    private static Random generator = new Random();

    // TODO: count guesses! have a limit.
    // private static Int16 guessCount = 0;
    // private static Int16 guessLimit = 10;

    private static string message = $"Oh flip, it's the high-low game! Try to guess the number. It's between {min.ToString()} and {max.ToString()}";

    // we add one to max to make our minmax range inclusive
    private static Int16 targetNumber = (Int16)(generator.Next(min, max + 1));

    // TODO: Tests
    static void Main(string[] args)
    {
      while ((guess == null) || (parsedGuess != targetNumber))
      {
        if (guess == null)
        {
          // first iteration
          // message is initialised with the first message
          // should implement guess counting, and use that as the source of truth (knowing that we're at the first step) instead
          Console.WriteLine(message);
          guess = Console.ReadLine();
        }
        else if (parsedGuess == targetNumber)
        {
          // correct answer
          Console.WriteLine($"You win! {parsedGuess.ToString()} is the correct number!");
        }
        else if (parsedGuess > targetNumber)
        {
          Console.WriteLine($"{parsedGuess.ToString()} is too high.");
          guess = Console.ReadLine();
        }
        else if (parsedGuess < targetNumber)
        {
          Console.WriteLine($"{parsedGuess.ToString()} is too low.");
          guess = Console.ReadLine();
        }
      }
    }

    // helpers
    private static bool getIsWithinRange()
    {
      return (parsedGuess >= min) && (parsedGuess <= max);
    }

    private static bool getIsInteger()
    {
      // note, this function also has a side effect -> it sets parsedGuess value
      return Int16.TryParse(guess, out parsedGuess);
    }

    private static void getValidationAndMessage(string guessToValidate)
    {
      // validate
      if (guess == "")
      {
        if (!getIsWithinRange())
        {
          Console.WriteLine($"Invalid input, please enter a number between {min.ToString()} and {max.ToString()}!");
        }

        if (!getIsInteger())
        {
          Console.WriteLine($"Invalid input, please enter a number!");
        }
      }
    }
  }
}
