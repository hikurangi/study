using System.Collections.Generic;
using System.Linq;

public class Student
{
    public string Name;
    public int Grade;
}

public class GradeSchool
{
    private IEnumerable<Student> _students = new List<Student>();

    public void Add(string student, int grade)
    {
        _students = _students.Append(new Student { Name = student, Grade = grade }).OrderBy(x => x.Grade).ThenBy(x => x.Name);
    }

    public IEnumerable<string> Roster() => _students.Select(x => x.Name);

    public IEnumerable<string> Grade(int grade) => _students.Aggregate(new List<string>(), (IEnumerable<string> g, Student s) => s.Grade == grade ? g.Append(s.Name) : g);
}