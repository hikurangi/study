use std::fmt;
use std::i32;

const MINUTES_IN_HOUR: i32 = 60;
const MINUTES_IN_DAY: i32 = MINUTES_IN_HOUR * 24;

#[derive(PartialEq, Eq, Debug)]
pub struct Clock {
    minutes: i32,
}

impl fmt::Display for Clock {
    fn fmt(&self, f: &mut fmt::Formatter) -> fmt::Result {
        write!(
            f,
            // I assume this formatting truncates any decimals arising from the division,
            // therefore giving the same effective result as calling .floor()
            "{:02}:{:02}",
            self.minutes / MINUTES_IN_HOUR,
            self.minutes % MINUTES_IN_HOUR
        )
    }
}

impl Clock {
    pub fn new(hours: i32, minutes: i32) -> Self {
        Clock {
            // this is safe because we control MINUTES_IN_DAY and it's a positive integer
            minutes: (hours * MINUTES_IN_HOUR + minutes).rem_euclid(MINUTES_IN_DAY),
        }
    }

    pub fn add_minutes(&self, minutes: i32) -> Self {
        Clock::new(0, self.minutes + minutes)
    }
}
