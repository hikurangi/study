using System.Linq;

public static class Triangle
{
    private static bool IsTriangle(params double[] triangle) => triangle.Max() < triangle.OrderByDescending(i => i).Skip(1).Sum();
    public static bool IsScalene(params double[] triangle) => IsTriangle(triangle) && triangle.Distinct().Count() == 3;
    public static bool IsIsosceles(params double[] triangle) => IsEquilateral(triangle) || IsTriangle(triangle) && triangle.Distinct().Count() == 2;
    public static bool IsEquilateral(params double[] triangle) => triangle.Distinct().Count() == 1 && triangle.Average() != 0;
}