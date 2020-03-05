using Xunit;

namespace HiLow
{
  public class UnitTests
  {
    [Theory]
    [InlineData(50, 25)]
    public void guess_is_too_low(int targetNumber, int guess)
    {
      var game = new Game(targetNumber: targetNumber); // punning?
      
      var actual = game.Guess(guess);
      var expected = $"{guess.ToString()} is too low. Please try again."; // too 'clever'?

      Assert.Equal(expected, actual);
    }

    [Theory]
    [InlineData(50, 75)]
    public void guess_is_too_high(int targetNumber, int guess)
    {
      var game = new Game(targetNumber: targetNumber);

      var actual = game.Guess(guess);
      var expected = $"{guess.ToString()} is too high. Please try again.";

      Assert.Equal(expected, actual);
    }

    [Theory]
    [InlineData(50, 50)]
    public void guess_is_correct(int targetNumber, int guess)
    {
      var game = new Game(targetNumber: targetNumber);

      var actual = game.Guess(guess);
      var expected = $"You win! {guess.ToString()} is the correct number!";

      Assert.Equal(expected, actual);
    }
  }
}
