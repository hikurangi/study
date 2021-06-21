namespace WiredBrainCoffee.StackApp
{
    public class SimpleStack
    {
        private readonly object[] _items;
        private int _currentIndex = -1;

        public SimpleStack() => _items = new object[10];

        public int Count => _currentIndex + 1;

        public void Push(object item) => _items[++_currentIndex] = item;

        public object Pop() => _items[_currentIndex--];
    }
}