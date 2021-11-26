using System.Text.Json;

namespace WiredBrainCoffee.StorageApp.Entities
{
    public static class EntityExtensions
    {
        public static T? Copy<T>(this T itemToCopy) where T : IEntity
        {
            var json = JsonSerializer.Serialize(itemToCopy);
            return JsonSerializer.Deserialize<T>(json);
        }
    }
}