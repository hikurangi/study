use std::fmt;
use std::i32;

#[derive(PartialEq, Eq, Debug)]
pub struct Clock {
    hours: i32,
    minutes: i32,
}

impl fmt::Display for Clock {
    fn fmt(&self, f: &mut fmt::Formatter) -> fmt::Result {
        write!(f, "{:02}:{:02}", self.hours, self.minutes)
    }
}

impl Clock {
    pub fn new(hours: i32, minutes: i32) -> Self {
        let minutes_from_the_hour = minutes % 60;
        let hours_from_minutes = (minutes as f32 / 60_f32).floor() as i32;
        let remaining_hours = (hours + hours_from_minutes) % 24;
        let adjusted_hours = if remaining_hours < 0 {
            24 + remaining_hours
        } else {
            remaining_hours
        };

        Clock {
            hours: adjusted_hours,
            minutes: if minutes_from_the_hour < 0 {
                60 + minutes_from_the_hour
            } else {
                minutes_from_the_hour
            },
        }
    }

    pub fn add_minutes(&self, minutes: i32) -> Self {
        // this logic (reasonably) assumes that the existing clock will be normal
        // all we have to contend with is wacky (negative) minutes.
        let existing_time_in_minutes = (self.hours * 60) + self.minutes;
        let new_total_minutes = existing_time_in_minutes + minutes;
        let adjusted_total_minutes = if new_total_minutes < 0 {
            1440 + (new_total_minutes % 1440)
        } else {
            new_total_minutes
        };

        let hours = (adjusted_total_minutes as f32 / 60_f32).floor() as i32 % 24;
        let updated_minutes = adjusted_total_minutes % 60;

        Clock {
            hours,
            minutes: updated_minutes,
        }
    }
}
