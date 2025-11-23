// The code below is a stub. Just enough to satisfy the compiler.
// In order to pass the tests you can add-to or change any of this code.
const EARTH_YEAR_IN_SECONDS: f64 = 31_556_600_f64;

#[derive(Debug)]
pub struct Duration {
    seconds: u64,
}

impl From<u64> for Duration {
    fn from(s: u64) -> Self {
        Duration { seconds: s }
    }
}

pub trait Planet {
    const YEAR_IN_SECONDS: f64;
    fn years_during(d: &Duration) -> f64;
}

macro_rules! create {
    ($name:ident, $ratio:literal) => {
        pub struct $name;
        impl Planet for $name {
            const YEAR_IN_SECONDS: f64 = EARTH_YEAR_IN_SECONDS * $ratio;
            fn years_during(d: &Duration) -> f64 {
                d.seconds as f64 / Self::YEAR_IN_SECONDS
            }
        }
    };
}

create!(Mercury, 0.2408467);
create!(Venus, 0.61519726);
create!(Earth, 1.0);
create!(Mars, 1.8808158);
create!(Jupiter, 11.862615);
create!(Saturn, 29.447498);
create!(Uranus, 84.016846);
create!(Neptune, 164.79132);
