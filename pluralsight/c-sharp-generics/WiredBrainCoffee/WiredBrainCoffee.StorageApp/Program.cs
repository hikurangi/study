using System;
using WiredBrainCoffee.StorageApp.Entities;
using WiredBrainCoffee.StorageApp.Repositories;

namespace WiredBrainCoffee.StorageApp
{
    class Program
    {
        static void Main(string[] _args)
        {
            var employeeRepository = new ListRepository<Employee>();
            AddEmployees(employeeRepository);
            GetEmployeeById(employeeRepository);

            var organisationRepository = new ListRepository<Organisation>();
            AddOrganisations(organisationRepository);

            Console.ReadLine();
        }

        private static void GetEmployeeById(ListRepository<Employee> employeeRepository)
        {
            var employee = employeeRepository.GetById(2);
            Console.WriteLine($"Employee with Id 2: {employee.FirstName}");
        }

        private static void AddEmployees(ListRepository<Employee> employeeRepository)
        {
            employeeRepository.Add(new Employee { FirstName = "Lisa" });
            employeeRepository.Add(new Employee { FirstName = "Bart" });
            employeeRepository.Add(new Employee { FirstName = "Maggie" });
            employeeRepository.Save();
        }

        private static void AddOrganisations(ListRepository<Organisation> organisationRepository)
        {
            organisationRepository.Add(new Organisation { Name = "Burns Empire" });
            organisationRepository.Add(new Organisation { Name = "Moe's Tavern" });
            organisationRepository.Save();
        }
    }
}
