using System;
using System.Collections.Generic;

public static class Strain
{   
    private static IEnumerable<T> WhereFor<T>(IEnumerable<T> collection, Func<T, bool> predicate, bool condition) {

      var castCollection = collection as ICollection<T>; // only cast when necessary

      if (castCollection.Count == 0)
      {
          return collection;
      }

      var kept = new List<T>();

      foreach (var item in castCollection)
      {
          if (predicate(item) == condition) // xplicit
          {
              kept.Add(item);
          }
      }

      return kept;
    }

    public static IEnumerable<T> Keep<T>(this IEnumerable<T> collection, Func<T, bool> predicate) => WhereFor(collection, predicate, true);

    public static IEnumerable<T> Discard<T>(this IEnumerable<T> collection, Func<T, bool> predicate) => WhereFor(collection, predicate, false);
}