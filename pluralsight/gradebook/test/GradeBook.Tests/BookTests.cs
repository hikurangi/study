using System;
using Xunit;

namespace GradeBook.Tests
{
    public class BookTests
    {
        [Fact]
        public void BookCalculatesAnAverageGrade()
        { 
          // arrange
          var book = new InMemoryBook("");
          book.AddGrade(89.1);
          book.AddGrade(90.5);
          book.AddGrade(77.3);

          // act
          var result = book.GetStatistics();

          // assert
          Assert.Equal(85.6, result.Average, 1);
          Assert.Equal(90.5, result.High);
          Assert.Equal(77.3, result.Low);
          Assert.Equal('B', result.Letter);
        }
        
        [Fact]
        public void BookRejectsGradeHigherThanLimit()
        {
          var book = new InMemoryBook("");
          book.AddGrade(90.2);
        
          Assert.Throws<ArgumentException>(() => book.AddGrade(105));
          
          var stats = book.GetStatistics();

          Assert.True(stats.Average == 90.2);
          Assert.True(stats.High == 90.2);
        }
    }
}
