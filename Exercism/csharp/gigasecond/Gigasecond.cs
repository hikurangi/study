using System;

public static class Gigasecond
{
    private const double Giga = 1e9;
    public static DateTime Add(DateTime moment) => moment.AddSeconds(Giga);
}