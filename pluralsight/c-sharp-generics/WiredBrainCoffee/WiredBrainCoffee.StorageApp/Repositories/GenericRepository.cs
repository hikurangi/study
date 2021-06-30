﻿using System;
using System.Collections.Generic;
using WiredBrainCoffee.StorageApp.Entities;

namespace WiredBrainCoffee.StorageApp.Repositories
{
    public class GenericRepository<T>
    {
        // the protected keyword is slightly more permissive than the private keyword, allowing us to access the protected field from a subclass / inheritor
        protected readonly List<T> _items = new();

        public void Add(T item)
        {
            _items.Add(item);
        }

        public void Save()
        {
            foreach (var item in _items)
            {
                Console.WriteLine(item);
            }
        }
    }

    public class GenericRepositoryWithRemove<T> : GenericRepository<T>
    {
        public void Remove(T item)
        {
            _items.Remove(item);
        }
    }
}


