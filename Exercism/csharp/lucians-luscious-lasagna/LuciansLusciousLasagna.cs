class Lasagna
{
    public int ExpectedMinutesInOven() => 40;

    public int RemainingMinutesInOven(int elapsed) => ExpectedMinutesInOven() - elapsed;

    public int PreparationTimeInMinutes(int layers) => 2 * layers;

    public int ElapsedTimeInMinutes(int layers, int cookingTime) => cookingTime + PreparationTimeInMinutes(layers);
}
