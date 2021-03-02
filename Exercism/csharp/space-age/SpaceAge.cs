using System.Collections.Generic;

public class SpaceAge
{
    public SpaceAge(int seconds)
    {
        _ageInSeconds = seconds;
    }

    enum Planet
    {
        Earth, Mercury, Venus, Mars, Jupiter, Saturn, Uranus, Neptune
    }

    readonly double _ageInSeconds;

    static readonly IReadOnlyDictionary<Planet, double> PlanetYearInSeconds = new Dictionary<Planet, double> {
      {Planet.Earth, 31_557_600},
      {Planet.Mercury, 7_600_543.81992},
      {Planet.Venus, 19_414_149.052176},
      {Planet.Mars, 59_354_032.690079994},
      {Planet.Jupiter, 374_355_659.12399995},
      {Planet.Saturn, 929_292_362.8848001},
      {Planet.Uranus, 2_651_370_019.3296},
      {Planet.Neptune, 5_200_418_560.032}
    };

    double Calculate(Planet planet) => _ageInSeconds / PlanetYearInSeconds[planet];

    public double OnEarth() => Calculate(Planet.Earth);
    public double OnMercury() => Calculate(Planet.Mercury);
    public double OnVenus() => Calculate(Planet.Venus);
    public double OnMars() => Calculate(Planet.Mars);
    public double OnJupiter() => Calculate(Planet.Jupiter);
    public double OnSaturn() => Calculate(Planet.Saturn);
    public double OnUranus() => Calculate(Planet.Uranus);
    public double OnNeptune() => Calculate(Planet.Neptune);
}