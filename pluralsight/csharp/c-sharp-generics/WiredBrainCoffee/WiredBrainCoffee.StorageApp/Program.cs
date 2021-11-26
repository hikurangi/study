using System;
using System.Collections.Generic;
using WiredBrainCoffee.StorageApp.Data;
using WiredBrainCoffee.StorageApp.Entities;
using WiredBrainCoffee.StorageApp.Repositories;

namespace WiredBrainCoffee.StorageApp
{
    class Program
    {
        static void Main(string[] args)
        {
            var employeeRepository = new SqlRepository<Employee>(new StorageAppDbContext());
            AddEmployees(employeeRepository);
            AddManagers(employeeRepository);
            GetEmployeeById(employeeRepository);
            WriteAllToConsole(employeeRepository);

            var organisationRepository = new SqlRepository<Organisation>(new StorageAppDbContext());
            AddOrganisations(organisationRepository);
            WriteAllToConsole(organisationRepository);

            Console.ReadLine();
        }

        private static void AddManagers(IWriteRepository<Manager> managerRepository)
        {
            managerRepository.Add(new Manager {FirstName = "Carl"});
            managerRepository.Add(new Manager {FirstName = "Lenny"});
            managerRepository.Save();
        }

        private static void WriteAllToConsole(IReadRepository<IEntity> repository)
        {
            var items = repository.GetAll();
            foreach (var item in items)
            {
                Console.WriteLine(item);
            }
        }

        private static void GetEmployeeById(IRepository<Employee> employeeRepository)
        {
            var employee = employeeRepository.GetById(2);
            Console.WriteLine($"Employee with Id 2: {employee.FirstName}");
        }

        private static void AddEmployees(IRepository<Employee> employeeRepository)
        {
            var employees = new[]
            {
                new Employee {FirstName = "Lisa"},
                new Employee {FirstName = "Bart"},
                new Employee {FirstName = "Maggie"}
            };

            employeeRepository.AddBatch(employees);
        }

        private static void AddOrganisations(IRepository<Organisation> organisationRepository)
        {
            var organisations = new[]
            {
                new Organisation {Name = "Burns Empire"},
                new Organisation {Name = "Moe's Tavern"}
            };

            organisationRepository.AddBatch(organisations);
        }
    }
}