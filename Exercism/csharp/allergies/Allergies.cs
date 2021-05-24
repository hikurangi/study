using System;
using System.Collections.Generic;
using System.Linq;

public enum Allergen
{
    Eggs = 1,
    Peanuts = 2,
    Shellfish = 4,
    Strawberries = 8,
    Tomatoes = 16,
    Chocolate = 32,
    Pollen = 64,
    Cats = 128
}

public class Allergies
{
    private readonly int _mask = 0;
    private readonly Allergen[] _allergens;
    private static readonly List<int> _values = Enum.GetValues(typeof(Allergen)).Cast<int>().ToList();

    public Allergies(int mask)
    {
        _mask = mask;
        _allergens = ListAllergens(_mask, new HashSet<Allergen>());
    }

    private Allergen[] ListAllergens(int mask, HashSet<Allergen> allergens) {

        if (mask == 0) {
          return Enumerable.Reverse(allergens).ToArray();
        }

        var largestFit = _values.Where(v => v <= mask).Max();

        allergens.Add((Allergen)largestFit);

        return ListAllergens(mask - largestFit, allergens);
    }

    public bool IsAllergicTo(Allergen allergen) => Array.IndexOf(_allergens, allergen) > -1;

    public Allergen[] List() => _allergens;
}