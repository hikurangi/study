// The code below is a stub. Just enough to satisfy the compiler.
// In order to pass the tests you can add-to or change any of this code.
const EARTH_YEAR_IN_SECONDS: f64 = 31_556_600.;

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

pub struct Mercury;
pub struct Venus;
pub struct Earth;
pub struct Mars;
pub struct Jupiter;
pub struct Saturn;
pub struct Uranus;
pub struct Neptune;

impl Planet for Mercury {
    const YEAR_IN_SECONDS: f64 = EARTH_YEAR_IN_SECONDS * 0.2408467;
    fn years_during(d: &Duration) -> f64 {
        d.seconds as f64 / Self::YEAR_IN_SECONDS
    }
}
impl Planet for Venus {
    const YEAR_IN_SECONDS: f64 = EARTH_YEAR_IN_SECONDS * 0.61519726;
    fn years_during(d: &Duration) -> f64 {
        d.seconds as f64 / Self::YEAR_IN_SECONDS
    }
}
impl Planet for Earth {
    const YEAR_IN_SECONDS: f64 = EARTH_YEAR_IN_SECONDS;
    fn years_during(d: &Duration) -> f64 {
        d.seconds as f64 / Self::YEAR_IN_SECONDS
    }
}
impl Planet for Mars {
    const YEAR_IN_SECONDS: f64 = EARTH_YEAR_IN_SECONDS * 1.8808158;
    fn years_during(d: &Duration) -> f64 {
        d.seconds as f64 / Self::YEAR_IN_SECONDS
    }
}
impl Planet for Jupiter {
    const YEAR_IN_SECONDS: f64 = EARTH_YEAR_IN_SECONDS * 11.862615;
    fn years_during(d: &Duration) -> f64 {
        d.seconds as f64 / Self::YEAR_IN_SECONDS
    }
}
impl Planet for Saturn {
    const YEAR_IN_SECONDS: f64 = EARTH_YEAR_IN_SECONDS * 29.447498;
    fn years_during(d: &Duration) -> f64 {
        d.seconds as f64 / Self::YEAR_IN_SECONDS
    }
}
impl Planet for Uranus {
    const YEAR_IN_SECONDS: f64 = EARTH_YEAR_IN_SECONDS * 84.016846;
    fn years_during(d: &Duration) -> f64 {
        d.seconds as f64 / Self::YEAR_IN_SECONDS
    }
}
impl Planet for Neptune {
    const YEAR_IN_SECONDS: f64 = EARTH_YEAR_IN_SECONDS * 164.79132;
    fn years_during(d: &Duration) -> f64 {
        d.seconds as f64 / Self::YEAR_IN_SECONDS
    }
}
