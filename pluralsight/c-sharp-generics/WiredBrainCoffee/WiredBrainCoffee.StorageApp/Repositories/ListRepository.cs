using System;
using System.Collections.Generic;
using System.Linq;
using WiredBrainCoffee.StorageApp.Entities;

namespace WiredBrainCoffee.StorageApp.Repositories
{
    public class ListRepository<T> : IRepository<T> where T : IEntity
    {
        private readonly List<T> _items = new();

        public IEnumerable<T> GetAll() => _items.ToList();

        public T GetById(int id) => _items.Single(item => item.Id == id);

        public void Add(T item)
        {
            item.Id = _items.Any() ? _items.Max(item => item.Id) + 1 : 1;
            _items.Add(item);
        }

        public void Remove(T item)
        {
            _items.Remove(item);
        }

        public void Save()
        {
            foreach (var item in _items)
            {
                Console.WriteLine(item);
            }
        }
    }
}


