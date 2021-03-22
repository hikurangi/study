using System;
using System.Collections.Generic;
using System.Linq;

public enum Schedule
{
    Teenth,
    First,
    Second,
    Third,
    Fourth,
    Last
}

public class Meetup
{
    private readonly IEnumerable<DateTime> _teenthRange;
    private readonly IEnumerable<DateTime> _monthRange;

    public Meetup(int month, int year)
    {
        _teenthRange = Enumerable.Range(13, 19).Select(day => new DateTime(year, month, day));
        _monthRange = Enumerable.Range(1, DateTime.DaysInMonth(year, month)).Select(day => new DateTime(year, month, day));
    }

    private IEnumerable<DateTime> GetDaysInRange(DayOfWeek dayOfWeek, IEnumerable<DateTime> range) => range.Where(day => day.DayOfWeek == dayOfWeek);

    public DateTime Day(DayOfWeek dayOfWeek, Schedule schedule) => schedule switch
    {
        Schedule.Teenth => GetDaysInRange(dayOfWeek, _teenthRange).FirstOrDefault(),
        Schedule.First => GetDaysInRange(dayOfWeek, _monthRange).FirstOrDefault(),
        Schedule.Second => GetDaysInRange(dayOfWeek, _monthRange).ElementAtOrDefault(1),
        Schedule.Third => GetDaysInRange(dayOfWeek, _monthRange).ElementAtOrDefault(2),
        Schedule.Fourth => GetDaysInRange(dayOfWeek, _monthRange).ElementAtOrDefault(3),
        Schedule.Last => GetDaysInRange(dayOfWeek, _monthRange).LastOrDefault(),
        _ => throw new ArgumentException($"Invalid schedule submitted: {schedule}")
    };
}