static class AssemblyLine
{
    public static double SuccessRate(int speed) => speed switch {
      <= 0 => 0.0,
      <= 4 => 1.0,
      <= 8 => 0.9,
      <= 9 => 0.8,
      _ => 0.77
    };

    public static double ProductionRatePerHour(int speed) => 221.0 * speed * SuccessRate(speed);
    public static int WorkingItemsPerMinute(int speed) => (int)ProductionRatePerHour(speed) / 60;
}