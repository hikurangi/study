using System;
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
            employeeRepository.Add(new Employee {FirstName = "Lisa"});
            employeeRepository.Add(new Employee {FirstName = "Bart"});
            employeeRepository.Add(new Employee {FirstName = "Maggie"});
            employeeRepository.Save();
        }

        private static void AddOrganisations(IRepository<Organisation> organisationRepository)
        {
            var organisations = new[]
            {
                new Organisation {Name = "Burns Empire"},
                new Organisation {Name = "Moe's Tavern"}
            };

            AddBatch(organisationRepository, organisations);
        }

        private static void AddBatch(IRepository<Organisation> organisationRepository, Organisation[] organisations)
        {
            foreach (var item in organisations)
            {
                organisationRepository.Add(item);
            }

            organisationRepository.Save();
        }
    }
}