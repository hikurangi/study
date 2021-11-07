using System;
using System.Linq;

public class Anagram
{
    private readonly string _alphabeticalBaseWord;
    private readonly string _baseWord;
    public Anagram(string baseWord)
    {
        _baseWord = baseWord;
        _alphabeticalBaseWord = Alphabetical(baseWord);
    }

    private string Alphabetical(string phrase) => string.Join("", phrase.OrderBy(char.ToLowerInvariant));
    public string[] FindAnagrams(string[] potentialMatches) => potentialMatches
      .Where(word => !string.Equals(word, _baseWord, StringComparison.InvariantCultureIgnoreCase) && string.Equals(Alphabetical(word), _alphabeticalBaseWord, StringComparison.InvariantCultureIgnoreCase))
      .ToArray();
}