static class Badge
{
  public static string Print(int? id, string name, string? department) =>
  $"{(id.HasValue ? "[" + id + "] - " : "")}{name} - {(department == null ? "OWNER" : department?.ToUpperInvariant())}";
}
