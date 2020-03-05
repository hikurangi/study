using System;

namespace HiLow
{
  class Game
  {
    private readonly int _min;
    private readonly int _max;
    private readonly int _targetNumber;
    private readonly string _initialMessage;
    private static readonly Random _generator = new Random();
    public Game(
      int min = 0,
      int max = 100,
      string? initialMessage = null,
      int? targetNumber = null
    )
    {
      _min = min;
      _max = max;
      _initialMessage = initialMessage ?? $"Oh flip, it's the high-low game! Try to guess the number. It's between {min.ToString()} and {max.ToString()}";
      _targetNumber = targetNumber ?? (int)(_generator.Next(_min, _max + 1));
    }

    public void Run()
    {
      var message = _initialMessage;
      var isValid = true;
      string guess;
      int parsedGuess;

      // post welcome message before first iteration
      Console.WriteLine(message);

      do
      {
        guess = Console.ReadLine();

        // validate: set parsedGuess with zero or valid parsed value
        if (!int.TryParse(guess, out parsedGuess))
        {
          isValid = false;
          message = $"Invalid input, please enter a number!";
        }

        if (parsedGuess < _min || parsedGuess > _max)
        {
          isValid = false;
          message = $"Invalid input, please enter a number between {_min.ToString()} and {_max.ToString()}!";
        }

        // actual comparison
        if (isValid && parsedGuess == _targetNumber)
        {
          message = $"You win! {parsedGuess.ToString()} is the correct number!";
        }
        else if (isValid && parsedGuess > _targetNumber)
        {
          message = $"{parsedGuess.ToString()} is too high. Please try again.";
        }
        else if (isValid && parsedGuess < _targetNumber)
        {
          message = $"{parsedGuess.ToString()} is too low. Please try again.";
        }

        Console.WriteLine(message);
      } while (parsedGuess != _targetNumber);
    }
  }
}
