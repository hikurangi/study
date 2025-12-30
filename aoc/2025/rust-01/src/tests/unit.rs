use super::*;

#[test]
#[should_panic]
fn no_op() {
    let start = 0;
    let delta = 0;
    step(start, delta);
}

#[test]
fn simple_forward() {
    let start = 50;
    let delta = 1;
    assert_eq!(
        step(start, delta),
        Turn {
            start,
            delta,
            end: 51,
            zeros: 0,
        }
    )
}

#[test]
fn simple_backward() {
    let start = 50;
    let delta = -1;
    assert_eq!(
        step(start, delta),
        Turn {
            start,
            delta,
            end: 49,
            zeros: 0,
        }
    )
}

#[test]
fn land() {
    let start = 99;
    let delta = 1;
    assert_eq!(
        step(start, delta),
        Turn {
            start,
            delta,
            end: 0,
            zeros: 1,
        }
    )
}

#[test]
fn cross_backwards_from_zero() {
    let start = 0;
    let delta = -1;
    assert_eq!(
        step(start, delta),
        Turn {
            start,
            delta,
            end: 99,
            zeros: 0,
        }
    )
}

#[test]
fn land_only_low() {
    let start = 5;
    let delta = -5;
    assert_eq!(
        step(start, delta),
        Turn {
            start,
            delta,
            end: 0,
            zeros: 1,
        }
    )
}

#[test]
fn land_only_high() {
    let start = 95;
    let delta = 5;
    assert_eq!(
        step(start, delta),
        Turn {
            start,
            delta,
            end: 0,
            zeros: 1,
        }
    )
}

#[test]
fn cross_only_low() {
    let start = 5;
    let delta = -10;
    assert_eq!(
        step(start, delta),
        Turn {
            start,
            delta,
            end: 95,
            zeros: 1,
        }
    )
}

#[test]
fn cross_only_high() {
    let start = 95;
    let delta = 10;
    assert_eq!(
        step(start, delta),
        Turn {
            start,
            delta,
            end: 5,
            zeros: 1,
        }
    )
}

#[test]
fn land_only() {
    let start = 37;
    let delta = 63;
    assert_eq!(
        step(start, delta),
        Turn {
            start,
            delta,
            end: 0,
            zeros: 1,
        }
    )
}

#[test]
fn edge_crossing() {
    let start = 37;
    let delta = 64;
    assert_eq!(
        step(start, delta),
        Turn {
            start,
            delta,
            end: 1,
            zeros: 1,
        }
    )
}

#[test]
fn full_rotation_positive() {
    let start = 42;
    let delta = 100;
    assert_eq!(
        step(start, delta),
        Turn {
            start,
            delta,
            end: 42,
            zeros: 1,
        }
    )
}

#[test]
fn full_rotation_negative() {
    let start = 42;
    let delta = -100;
    assert_eq!(
        step(start, delta),
        Turn {
            start,
            delta,
            end: 42,
            zeros: 1,
        }
    )
}

#[test]
fn multi_wrap_positive() {
    let start = 42;
    let delta = 200;
    assert_eq!(
        step(start, delta),
        Turn {
            start,
            delta,
            end: 42,
            zeros: 2,
        }
    )
}

#[test]
fn multi_wrap_negative() {
    let start = 42;
    let delta = -200;
    assert_eq!(
        step(start, delta),
        Turn {
            start,
            delta,
            end: 42,
            zeros: 2,
        }
    )
}

#[test]
fn multi_wrap_offset_positive() {
    let start = 42;
    let delta = 263;
    assert_eq!(
        step(start, delta),
        Turn {
            start,
            delta,
            end: 5,
            zeros: 3,
        }
    )
}

#[test]
fn multi_wrap_offset_negative() {
    let start = 42;
    let delta = -237;
    assert_eq!(
        step(start, delta),
        Turn {
            start,
            delta,
            end: 5,
            zeros: 2,
        }
    )
}

#[test]
fn multi_wrap_land_positive() {
    let start = 37;
    let delta = 263;
    assert_eq!(
        step(start, delta),
        Turn {
            start,
            delta,
            end: 0,
            zeros: 3,
        }
    )
}

#[test]
fn multi_wrap_land_negative() {
    let start = 37;
    let delta = -237;
    assert_eq!(
        step(start, delta),
        Turn {
            start,
            delta,
            end: 0,
            zeros: 3,
        }
    )
}

#[test]
fn multi_wrap_landing_and_crossing_positive() {
    let start = 0;
    let delta = 200;
    assert_eq!(
        step(start, delta),
        Turn {
            start,
            delta,
            end: 0,
            zeros: 2,
        }
    )
}

#[test]
fn multi_wrap_landing_and_crossing_negative() {
    let start = 0;
    let delta = -200;
    assert_eq!(
        step(start, delta),
        Turn {
            start,
            delta,
            end: 0,
            zeros: 2,
        }
    )
}
