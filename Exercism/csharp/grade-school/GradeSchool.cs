using System.Collections.Generic;
using System.Linq;

public class GradeSchool
{
    private readonly IDictionary<int, IEnumerable<string>> _school = new Dictionary<int, IEnumerable<string>>();

    public void Add(string student, int grade)
    {
        _school[grade] = (_school.TryGetValue(grade, out var existingGrade) ? existingGrade : new List<string>()).Append(student).OrderBy(x => x);
    }

    public IEnumerable<string> Roster() => _school.ToList().OrderBy(x => x.Key).SelectMany(x => x.Value);

    public IEnumerable<string> Grade(int grade) => _school.TryGetValue(grade, out var existingGrade) ? existingGrade : new List<string>();
}