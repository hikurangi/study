using System.Collections.Generic;
using System.Linq;

public class HighScores
{
    private List<int> _scores;
    private readonly int _latest;
    private readonly int _max;
    private List<int> _sorted;

    public HighScores(List<int> list)
    {
        _scores = list;
    }

    public List<int> Scores() => _scores;
    public int Latest() => _scores.Last();
    public int PersonalBest() => _scores.Max(); // PersonalTopN(1)
    public List<int> PersonalTopN(int count) => _scores.OrderByDescending(i => i).Take(count).ToList();
    public List<int> PersonalTopThree() => PersonalTopN(3);
}