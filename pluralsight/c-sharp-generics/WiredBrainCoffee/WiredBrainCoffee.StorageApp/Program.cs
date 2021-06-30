using System;
using WiredBrainCoffee.StorageApp.Entities;
using WiredBrainCoffee.StorageApp.Repositories;

namespace WiredBrainCoffee.StorageApp
{
    class Program
    {
        static void Main(string[] args)
        {
            var employeeRepository = new GenericRepository<Employee>();
            employeeRepository.Add(new Employee { FirstName = "Lisa" });
            employeeRepository.Add(new Employee { FirstName = "Bart" });
            employeeRepository.Add(new Employee { FirstName = "Maggie" });
            employeeRepository.Save();

            var organisationRepository = new GenericRepository<Organisation>();
            organisationRepository.Add(new Organisation { Name = "Burns Empire" });
            organisationRepository.Add(new Organisation { Name = "Moe's Tavern" });
            organisationRepository.Save();

            Console.ReadLine();
        }
    }
}
