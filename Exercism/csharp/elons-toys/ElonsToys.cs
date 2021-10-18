using System;

class RemoteControlCar
{
  public readonly Guid Id;
  private int _distance;
  private double _battery;

  public RemoteControlCar()
  {
    Id = Guid.NewGuid();
    _distance = 0;
    _battery = 1.0;
  }

  public static RemoteControlCar Buy() => new RemoteControlCar();

  public string DistanceDisplay() => $"Driven {_distance} meters";

  public string BatteryDisplay() => $"Battery {(_battery > 0 ? "at " + Math.Round(_battery * 100, 2) + "%" : "empty")}";

  public void Drive()
  {
    if (_battery > 0)
    {
      _distance += 20;
      _battery -= 0.01;
    }
  }
}
