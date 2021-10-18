using System;

public static class PhoneNumber
{
  private static (bool IsNewYork, bool IsFake, string LocalNumber) _Analyze(this string[] numberSections) => (numberSections[0] == "212", numberSections[1] == "555", numberSections[2]);

  public static (bool IsNewYork, bool IsFake, string LocalNumber) Analyze(string phoneNumber) => phoneNumber.Split('-')._Analyze();

  public static bool IsFake((bool IsNewYork, bool IsFake, string LocalNumber) phoneNumberInfo) => phoneNumberInfo.IsFake;
}
