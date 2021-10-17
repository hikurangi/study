module BookingUpForBeauty

// The following line is needed to use the DateTime type
open System

let schedule = DateTime.Parse
let hasPassed appointmentDate = DateTime.Now > appointmentDate
let isAfternoonAppointment (appointmentDate: DateTime) = appointmentDate.Hour >= 12 && appointmentDate.Hour < 18
let description (appointmentDate: DateTime) = $"""You have an appointment on %s{appointmentDate.ToString("M/d/yyyy h:mm:ss tt")}."""
let anniversaryDate() = (DateTime.Now.Year, 9, 15) |> DateTime