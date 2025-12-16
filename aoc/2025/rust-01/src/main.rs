// use std::env;
use std::{
    fs::File,
    io::{BufRead, BufReader},
};

#[derive(Debug, PartialEq)]
enum Line {
    Value(i32),
}

#[derive(Debug, PartialEq)]
enum LineError {
    Empty,
    BadSign,
    BadNumber,
}

// file is read from project root?
// or is it relative to `cargo run` site
const FILE_PATH: &str = "./input.txt";

fn parse_line(line: &str) -> Result<Line, LineError> {
    let trimmed = line.trim(); // possibly unnecessary
    let mut chars = trimmed.chars();
    let sign = chars.next().ok_or(LineError::Empty)?;
    let rest = chars.as_str();

    let number: i32 = rest.parse().map_err(|_| LineError::BadNumber)?;

    match sign {
        'R' => Ok(Line::Value(number)),
        'L' => Ok(Line::Value(-number)),
        _ => Err(LineError::BadSign),
    }
}

fn process_lines<I>(lines: I) -> Result<Vec<i32>, LineError>
where
    I: IntoIterator<Item = Result<String, LineError>>,
{
    lines
        .into_iter()
        .map(|line| {
            let line = line?;
            parse_line(&line)
        })
        .map(|r| {
            r.map(|l| match l {
                Line::Value(n) => n,
            })
        })
        .collect()
}

fn get_password(initial_dial_position: i32, turns: Vec<i32>) -> u32 {
    let (password, _) = turns.iter().fold(
        (0, initial_dial_position),
        |(mut password, dial_position), current_turn| {
            let new_dial_position = (dial_position + current_turn) % 100;
            if new_dial_position == 0 {
                password += 1;
            }
            (password, new_dial_position)
        },
    );

    password as u32
}

fn read_lines<R: BufRead>(reader: R) -> impl Iterator<Item = std::io::Result<String>> {
    reader.lines()
}

fn main() {
    let file = File::open(FILE_PATH).unwrap();
    let reader = BufReader::new(file);
    let lines = read_lines(reader);

    let turns = process_lines(lines.map(|l| l.map_err(|_| LineError::Empty))).unwrap();

    let password = get_password(50, turns);

    println!("PASSWORD: {password}");
}

#[cfg(test)]
mod tests {
    // Note this useful idiom: importing names from outer (for mod tests) scope.
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
    fn password_is_zero() {
        let turns: Vec<i32> = Vec::from([1, 10, -5]);
        let initial_dial_position = 0;
        assert_eq!(get_password(initial_dial_position, turns), 0);
    }

    #[test]
    fn password_is_zero_overflowing() {
        let turns: Vec<i32> = Vec::from([95, 15, -2, 6]);
        let initial_dial_position = 0;
        assert_eq!(get_password(initial_dial_position, turns), 0);
    }

    #[test]
    fn password_is_one() {
        let turns: Vec<i32> = Vec::from([99, 1, 22, -700]);
        let initial_dial_position = 0;
        assert_eq!(get_password(initial_dial_position, turns), 1);
    }

    #[test]
    fn password_is_two() {
        let turns: Vec<i32> = Vec::from([17, -5, -12, 27, -27]);
        let initial_dial_position = 0;
        assert_eq!(get_password(initial_dial_position, turns), 2);
    }
}
