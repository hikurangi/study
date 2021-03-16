using System;
using System.Text.RegularExpressions;

public class PhoneNumber
{
    public static string Clean(string phoneNumber)
    {
        var clean = Regex.Replace(phoneNumber, @"[^\d]", "");

        if (clean.Length < 10 || clean.Length > 11)
        {
            throw new ArgumentException();
        }

        if (clean.Length == 11)
        {
            if (clean[0] == '1')
            {
                clean = clean.Substring(1);
            }
            else
            {
                throw new ArgumentException();
            }
        }

        var areaCode = clean[0];
        if (areaCode == '0' || areaCode == '1')
        {
          throw new ArgumentException();
        }

        var exchangeCode = clean[3];
        if (exchangeCode == '0' || exchangeCode == '1')
        {
          throw new ArgumentException();
        }

        return clean;
    }
}