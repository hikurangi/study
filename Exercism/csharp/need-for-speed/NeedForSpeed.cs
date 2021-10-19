class RemoteControlCar
{
  private readonly int _speed;
  private readonly int _batteryDrain;
  private int _battery;
  private int _distanceDriven;

  public RemoteControlCar(int speed, int batteryDrain)
  {
    _speed = speed;
    _batteryDrain = batteryDrain;
    _distanceDriven = 0;
    _battery = 100;
  }

  public int Range() => _battery / _batteryDrain * _speed;
  public bool BatteryDrained() => _battery <= 0; // should only be able to go to zero
  public int DistanceDriven() => _distanceDriven;

  public void Drive()
  {
    if (_battery > 0)
    {
      _distanceDriven += _speed;
      _battery -= _batteryDrain;
    }
  }

  public static RemoteControlCar Nitro() => new RemoteControlCar(50, 4);
}

class RaceTrack
{
  private readonly int _distance;

  public RaceTrack(int distance)
  {
    _distance = distance;
  }

  public bool CarCanFinish(RemoteControlCar car) => car.Range() >= _distance;
}
