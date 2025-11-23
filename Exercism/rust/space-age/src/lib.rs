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

macro_rules! create_planet_with_orbital_period {
    ($planet_name:ident, $orbital_period_in_earth_years:literal) => {
        pub struct $planet_name;
        impl Planet for $planet_name {
            const YEAR_IN_SECONDS: f64 = EARTH_YEAR_IN_SECONDS * $orbital_period_in_earth_years;
            fn years_during(d: &Duration) -> f64 {
                d.seconds as f64 / Self::YEAR_IN_SECONDS
            }
        }
    };
}

create_planet_with_orbital_period!(Mercury, 0.2408467);
create_planet_with_orbital_period!(Venus, 0.61519726);
create_planet_with_orbital_period!(Earth, 1.0);
create_planet_with_orbital_period!(Mars, 1.8808158);
create_planet_with_orbital_period!(Jupiter, 11.862615);
create_planet_with_orbital_period!(Saturn, 29.447498);
create_planet_with_orbital_period!(Uranus, 84.016846);
create_planet_with_orbital_period!(Neptune, 164.79132);
