using System;
using System.Linq;

public class Anagram
{
    private readonly char[] _anagram;
    private readonly string _baseWord;

    public Anagram(string baseWord)
    {
        _baseWord = baseWord;
        _anagram = MakeComparable(baseWord);
    }

    private char[] MakeComparable(string phrase) => phrase.ToCharArray().Select(char.ToLowerInvariant).OrderBy(c => c).ToArray();
    public string[] FindAnagrams(string[] potentialMatches) => potentialMatches
      .Where(m => MakeComparable(m).SequenceEqual(_anagram) && !String.Equals(m, _baseWord, StringComparison.InvariantCultureIgnoreCase))
      .ToArray();
}