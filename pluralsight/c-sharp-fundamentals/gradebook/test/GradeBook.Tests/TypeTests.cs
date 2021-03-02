using System;
using Xunit;

namespace GradeBook.Tests
{
  public delegate string WriteLogDelegate(string logMessage);

  public class TypeTests
  {

    int count = 0;

    [Fact]
    public void WriteLogDelegateCanPointToMethod()
    {
      WriteLogDelegate log = ReturnMessage;
      log += ReturnMessage;
      log += IncrementCount;

      var result = log("Hello");
      Assert.Equal(3, count);
    }

    string IncrementCount(string message)
    {
      count++;
      return message.ToLower();
    }

    string ReturnMessage(string message)
    {
      count++;
      return message;
    }
    
    [Fact]
    public void StringsBehaveLikeValueTypes()
    {
      string name = "Santa's Little Helper";
      var upper = MakeUppercase(name);
      
      Assert.Equal("SANTA'S LITTLE HELPER", upper);
    }

    [Fact]
    public void ValueTypesAlsoPassByValue()
    {
      var x = GetInt();
      SetInt(ref x);

      Assert.Equal(42, x);
    }

    [Fact]
    public void CSharpCanPassByRef()
    {
      var book1 = GetBook("Book 1");
      GetBookSetNameByRef(ref book1, "New Name");

      Assert.Equal("New Name", book1.Name);
    }

    [Fact]
    public void CSharpIsPassByValue()
    {
      var book1 = GetBook("Book 1");
      GetBookSetName(book1, "New Name");

      Assert.Equal("Book 1", book1.Name);
    }

    [Fact]
    public void CanSetNameFromReference()
    {
      var book1 = GetBook("Book 1");
      SetName(book1, "New Name");

      Assert.Equal("New Name", book1.Name);
    }

    [Fact]
    public void GetBookReturnsDifferentObjects()
    {
      var book1 = GetBook("Book 1");
      var book2 = GetBook("Book 2");

      Assert.Equal("Book 1", book1.Name);
      Assert.Equal("Book 2", book2.Name);
    }

    [Fact]
    public void TwoVariablesCanReferenceSameObject()
    {
      var book1 = GetBook("Book 1");
      var book2 = book1;

      Assert.Same(book1, book2);
      Assert.True(Object.ReferenceEquals(book1, book2));
    }

    InMemoryBook GetBook(string name)
    {
      return new InMemoryBook(name);
    }

    private void GetBookSetName(InMemoryBook book, string name)
    {
      book = new InMemoryBook(name);
      book.Name = name;
    }

    private void GetBookSetNameByRef(ref InMemoryBook book, string name)
    {
      book = new InMemoryBook(name);
    }

    private void SetName(InMemoryBook book, string name)
    {
      book.Name = name;
    }

    private string MakeUppercase(string parameter)
    {
      return parameter.ToUpper();
    }

    private void SetInt(ref int x)
    {
      x = 42;
    }

    private int GetInt()
    {
      return 3;
    }
  }
}
