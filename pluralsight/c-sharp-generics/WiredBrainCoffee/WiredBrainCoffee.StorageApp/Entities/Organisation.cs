namespace WiredBrainCoffee.StorageApp.Entities
{
    public class Organisation
    {
        public int Id { get; set; }
        public string? Name { get; set; }

        public override string ToString() => $"Id: {Id}, Name: {Name}";
    }
}
