using System;
using System.Linq;
using System.Text.RegularExpressions;

public class PhoneNumber
{
    private const string USPhoneNumberPattern = @"^1?([2-9]\d\d[2-9][\d]{6})$";

    public static string Clean(string phoneNumber)
    {
        var asDigitsOnly = string.Concat(phoneNumber.Where(char.IsDigit));
        var numberMatch = Regex.Match(asDigitsOnly, USPhoneNumberPattern);
        var numberSansCountryCode = numberMatch.Groups[1].ToString();

        return numberMatch.Success ? numberSansCountryCode : throw new ArgumentException();
    }
}