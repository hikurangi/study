using System;
using System.Collections.Generic;

public static class Strain
{
    private static IEnumerable<T> WhereFor<T>(ICollection<T> collection, Func<T, bool> predicate, bool condition)
    {
        if (collection.Count == 0)
        {
            return collection;
        }

        var kept = new List<T>();

        foreach (var item in collection)
        {
            if (predicate(item) == condition) // xplicit
            {
                kept.Add(item);
            }
        }

        return kept;
    }

    public static IEnumerable<T> Keep<T>(this IEnumerable<T> collection, Func<T, bool> predicate) => WhereFor(collection as ICollection<T>, predicate, true);

    public static IEnumerable<T> Discard<T>(this IEnumerable<T> collection, Func<T, bool> predicate) => WhereFor(collection as ICollection<T>, predicate, false);
}
