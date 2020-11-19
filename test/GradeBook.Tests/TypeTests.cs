using Xunit;

namespace GradeBook.Tests
{
    public class TypeTests
    {
        [Fact]
        public void Test()
        { 
          var book1 = GetBook("Book 1");
          var book2 = GetBook("Book 2");

          Assert.Equal("Book 1", book1.Name);
          Assert.Equal("Book 2", book2.Name);
        }

        Book GetBook(string name)
        {
          return new Book(name);
        }
    }
}
