using System;

namespace HiLow
{
  class Program
  {
    // TODO: instantiate class with parameters below
    // for testing purposes, but also for user config
    
    // immutable fields which will in future be class parameters
    private static readonly Int16 min = 0;
    private static readonly Int16 max = 100;

    // instantiate Random separately so we don't run into 'random' duplicates
    private static readonly Random generator = new Random();
    private static readonly Int16 targetNumber = (Int16)(generator.Next(min, max + 1)); // we add one to max to make our minmax range inclusive

    // mutable state fields
    private static string message = $"Oh flip, it's the high-low game! Try to guess the number. It's between {min.ToString()} and {max.ToString()}";
    private static bool isValid;
    // TODO: count guesses! have a limit.
    // private static Int16 guessCount = 0;
    // private static Int16 guessLimit = 10;

    private static string guess = "";
    private static Int16 parsedGuess;

    // TODO: Tests
    static void Main(string[] args)
    {
      // post welcome message before first iteration
      Console.WriteLine(message);

      while (parsedGuess != targetNumber)
      {
        // Console.WriteLine($"Target number is: {targetNumber.ToString()}"); // sanity check

        guess = Console.ReadLine();
        setIsValidAndValidationMessage(); // also sets parsedGuess value!

          if (isValid && (parsedGuess == targetNumber))
          {
            message = $"You win! {parsedGuess.ToString()} is the correct number!";
          }
          else if (isValid && (parsedGuess > targetNumber))
          {
            message = $"{parsedGuess.ToString()} is too high. Please try again.";
          }
          else if (isValid && (parsedGuess < targetNumber))
          {
            message = $"{parsedGuess.ToString()} is too low. Please try again.";
          }

        Console.WriteLine(message);
      }
    }

    // helpers
    private static bool getIsWithinRange()
    {
      return (parsedGuess >= min) && (parsedGuess <= max);
    }

    private static bool getIsInteger()
    {
      // as noted above, this function also has a side effect -> it sets parsedGuess value
      return Int16.TryParse(guess, out parsedGuess);
    }

    private static void setIsValidAndValidationMessage()
    {
      isValid = true;

      if (!getIsWithinRange())
      {
        isValid = false;
        message = $"Invalid input, please enter a number between {min.ToString()} and {max.ToString()}!";
      }

      if (!getIsInteger())
      {
        isValid = false;
        message = $"Invalid input, please enter a number!";
      }
    }
  }
}
