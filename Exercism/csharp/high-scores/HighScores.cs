using System.Collections.Generic;
using System.Linq;

public class HighScores
{
    private readonly List<int> _scores;

    public HighScores(List<int> list)
    {
        _scores = list ?? new List<int>(); // guard against nullable list param
    }

    public List<int> Scores() => _scores.ToList();
    public int Latest() => _scores.LastOrDefault();
    public int PersonalBest() => _scores.Max();
    public List<int> PersonalTopThree() => _scores.OrderByDescending(i => i).Take(3).ToList();
}