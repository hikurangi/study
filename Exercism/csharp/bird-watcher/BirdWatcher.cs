using System.Linq;

class BirdCount
{
    private int[] birdsPerDay;

    public BirdCount(int[] birdsPerDay)
    {
        this.birdsPerDay = birdsPerDay;
    }

    public static int[] LastWeek() => new int[] { 0, 2, 5, 3, 7, 8, 4 };
    public int Today() => birdsPerDay.Last();

    public void IncrementTodaysCount()
    { // pinched directly from Erik Schierboom
      birdsPerDay[^1]++; // C# 8.0 -> caret allows for negative index access, starting from -1
    }

    public bool HasDayWithoutBirds() => birdsPerDay.Contains(0);
    public int CountForFirstDays(int numberOfDays) => birdsPerDay.Take(numberOfDays).Sum();
    public int BusyDays() => birdsPerDay.Count(d => d > 4);
}