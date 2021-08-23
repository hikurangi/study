using System.Collections.Generic;
using System.Linq;

public class GradeSchool
{
    private readonly IDictionary<int, IEnumerable<string>> _school = new Dictionary<int, IEnumerable<string>>();

    private IEnumerable<string> SafelyAccessGrade(int grade, IDictionary<int, IEnumerable<string>> school) => school.TryGetValue(grade, out var existingGrade) ? existingGrade : new List<string>();

    public void Add(string student, int grade)
    {
        _school[grade] = Grade(grade).Append(student).OrderBy(x => x);
    }

    public IEnumerable<string> Roster() => _school.ToList().OrderBy(x => x.Key).SelectMany(x => x.Value);

    public IEnumerable<string> Grade(int grade) => SafelyAccessGrade(grade, _school);
}