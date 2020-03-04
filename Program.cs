using System;

namespace HiLow
{
  class Program
  {
    // TODO: instantiate class with parameters below
    // for testing purposes, but also for user config

    // immutable fields which will in future be class parameters
    private const int Min = 0;
    private const int Max = 100;
    private static readonly string initialMessage = $"Oh flip, it's the high-low game! Try to guess the number. It's between {Min.ToString()} and {Max.ToString()}";

    // instantiate Random separately so we don't run into 'random' duplicates
    private static readonly Random generator = new Random();
    private static int targetNumber = (int)(generator.Next(Min, Max + 1)); // we add one to max to make our minmax range inclusive

    static void Main(string[] args)
    {
      var message = initialMessage;
      var isValid = true;
      string guess;
      int parsedGuess;

      // post welcome message before first iteration
      Console.WriteLine(message);

      do
      {
        guess = Console.ReadLine();

        // validate
        if (!int.TryParse(guess, out parsedGuess))
        {
          isValid = false;
          message = $"Invalid input, please enter a number!";
        }

        if (parsedGuess < Min || parsedGuess > Max)
        {
          isValid = false;
          message = $"Invalid input, please enter a number between {Min.ToString()} and {Max.ToString()}!";
        }

        // actual comparison
        if (isValid && parsedGuess == targetNumber)
        {

          message = $"You win! {parsedGuess.ToString()} is the correct number!";
        }
        else if (isValid && parsedGuess > targetNumber)
        {
          message = $"{parsedGuess.ToString()} is too high. Please try again.";
        }
        else if (isValid && parsedGuess < targetNumber)
        {
          message = $"{parsedGuess.ToString()} is too low. Please try again.";
        }

        Console.WriteLine(message);
      } while (parsedGuess != targetNumber);
    }
  }
}

// conditions to consider
// user guesses ""
// user guesses text
// user guesses number out of bounds