using System;

static class SavingsAccount
{
  public static float InterestRate(decimal balance) => balance switch
  {
    < 0m => -3.213f,
    < 1_000m => 0.5f,
    < 5_000m => 1.621f,
    _ => 2.475f
  };

  public static decimal AnnualBalanceUpdate(decimal balance) => balance + balance * Math.Abs((decimal)InterestRate(balance) / 100m);

  private static decimal YearUpdate(decimal balance, decimal targetBalance, int yearsElapsed) => (AnnualBalanceUpdate(balance) >= targetBalance) ? yearsElapsed : YearUpdate(AnnualBalanceUpdate(balance), targetBalance, yearsElapsed + 1);

  public static int YearsBeforeDesiredBalance(decimal balance, decimal targetBalance) => (int)YearUpdate(balance, targetBalance, 1);
}