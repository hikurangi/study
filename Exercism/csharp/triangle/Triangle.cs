using System;
using System.Collections.Generic;

public static class Triangle
{
    private static int CountUniqueElements<T>(IEnumerable<T> elems) => new HashSet<T>(elems).Count;
    
    public static bool IsScalene(double side1, double side2, double side3)
    {
        throw new NotImplementedException("You need to implement this function.");
    }

    public static bool IsIsosceles(double side1, double side2, double side3) 
    {
        throw new NotImplementedException("You need to implement this function.");
    }

    public static bool IsEquilateral(double side1, double side2, double side3) {
      // can I use params?
      var elems =  new List<double>{side1, side2, side3};
    }
}