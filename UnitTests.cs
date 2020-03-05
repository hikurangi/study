using Xunit;

namespace HiLow
{
  public class UnitTests
  {
    [Theory]
    [InlineData(50, 25)]
    public void guess_too_low(int targetNumber, int guess)
    {
      var game = new Game(targetNumber: targetNumber); // punning?
      string actual = game.Guess(guess);
      
      // too 'clever'?
      var expected = $"{guess} is too low. Please try again.";

      Assert.Equal(expected, actual);
    }
  }
}
