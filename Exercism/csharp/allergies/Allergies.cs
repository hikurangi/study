using System;
using System.Collections.Generic;
using System.Linq;

[Flags]
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
    private readonly Allergen _mask;
    private readonly IEnumerable<Allergen> _allergens;

    public Allergies(int mask)
    {
        _mask = (Allergen)mask;
        _allergens = Enum.GetValues(typeof(Allergen)).Cast<Allergen>().Where(IsAllergicTo);
    }

    public bool IsAllergicTo(Allergen allergen) => _mask.HasFlag(allergen);

    public IEnumerable<Allergen> List() => _allergens;
}