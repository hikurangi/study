use super::*;

#[test]
fn password_is_zero() {
    let turns: Vec<i32> = Vec::from([1, 10]);
    let initial_dial_position = 50;
    assert_eq!(get_password(initial_dial_position, turns), 0);
}

#[test]
fn password_is_one_by_landing_only() {
    let turns: Vec<i32> = Vec::from([2, -52]);
    let initial_dial_position = 50;
    assert_eq!(get_password(initial_dial_position, turns), 1);
}

#[test]
fn password_is_one_by_crossing_only() {
    let turns: Vec<i32> = Vec::from([1, 51]);
    let initial_dial_position = 50;
    assert_eq!(get_password(initial_dial_position, turns), 1);
}

#[test]
fn password_is_three_by_crossing_zero_and_landing_on_zero() {
    let turns: Vec<i32> = Vec::from([-50, -1, 1]);
    let initial_dial_position = 50;
    assert_eq!(get_password(initial_dial_position, turns), 2);
}

#[test]
fn password_is_six_by_crossing_zero_six_times_both_directions() {
    let turns: Vec<i32> = Vec::from([300, -300]);
    let initial_dial_position = 50;
    assert_eq!(get_password(initial_dial_position, turns), 6);
}

#[test]
fn password_is_three() {
    let initial_dial_position = 0;
    let turns: Vec<i32> = Vec::from([17, -5, -12, 27, -27, 5, -10]);
    assert_eq!(get_password(initial_dial_position, turns), 3);
}

#[test]
fn password_is_six_from_example() {
    let initial_dial_position = 50;
    let turns: Vec<i32> = Vec::from([-68, -30, 48, -5, 60, -55, -1, -99, 14, -82]);
    assert_eq!(get_password(initial_dial_position, turns), 6);
}
