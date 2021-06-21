namespace WiredBrainCoffee.StackApp
{
    public class SimpleStackDouble
    {
        private readonly double[] _items;
        private int _currentIndex = -1;

        public SimpleStackDouble() => _items = new double[10];

        public int Count => _currentIndex + 1;

        public void Push(double item) => _items[++_currentIndex] = item;

        public double Pop() => _items[_currentIndex--];
    }

    public class SimpleStackString
    {
        private readonly string[] _items;
        private int _currentIndex = -1;

        public SimpleStackString() => _items = new string[10];

        public int Count => _currentIndex + 1;

        public void Push(string item) => _items[++_currentIndex] = item;

        public string Pop() => _items[_currentIndex--];
    }
}