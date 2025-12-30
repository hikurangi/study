use super::*;

#[test]
fn postive_number() {
    let line: &str = "R11";
    assert_eq!(parse_line(line), Ok(Line::Value(11_i32)));
}

#[test]
fn negative_number() {
    let line: &str = "L496";
    assert_eq!(parse_line(line), Ok(Line::Value(-496)));
}

#[test]
fn empty_string() {
    let line: &str = "";
    assert_eq!(parse_line(line), Err(LineError::Empty));
}

#[test]
fn invalid_number() {
    let line: &str = "Labc";
    assert_eq!(parse_line(line), Err(LineError::BadNumber));
}

#[test]
fn invalid_sign() {
    let line: &str = "X123";
    assert_eq!(parse_line(line), Err(LineError::BadSign));
}

#[test]
fn zero_turn_right() {
    let line: &str = "R0";
    assert_eq!(parse_line(line), Err(LineError::NotATurn));
}

#[test]
fn zero_turn_left() {
    let line: &str = "L0";
    assert_eq!(parse_line(line), Err(LineError::NotATurn));
}
