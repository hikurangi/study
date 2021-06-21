using WiredBrainCoffee.StorageApp.Entities;
using WiredBrainCoffee.StorageApp.Repositories;

namespace WiredBrainCoffee.StorageApp
{
    class Program
    {
        static void Main(string[] args)
        {
            var employeeRepository = new EmployeeRepository();

            employeeRepository.Add(new Employee { FirstName = "Lisa" });
            employeeRepository.Add(new Employee { FirstName = "Bart" });
            employeeRepository.Add(new Employee { FirstName = "Maggie" });

            employeeRepository.Save();
        }
    }
}
