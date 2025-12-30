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
    NotATurn,
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

    if number == 0 {
        // eliminate non-turn turns!
        return Err(LineError::NotATurn);
    }

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

#[derive(Debug, PartialEq)]
struct Turn {
    start: u32,
    delta: i32,
    end: u32,
    zeros: u32,
}

fn step(start: u32, delta: i32) -> Turn {
    if delta == 0 {
        panic!("Invalid delta value! Delta cannot be zero")
    }

    let is_right_turn = delta > 0;
    let initial_clicks = delta.unsigned_abs();
    let mut clicks_remaining = initial_clicks;
    let mut position = start;
    let mut zeros = 0;

    while clicks_remaining > 0 {
        match is_right_turn {
            true => {
                if position == 99 {
                    zeros += 1;
                    position = 0;
                } else {
                    position += 1;
                }
            }
            false => {
                if position == 0 {
                    if clicks_remaining != initial_clicks {
                        // seeing a zero at the *start* of a turn doesn't count!
                        zeros += 1;
                    }
                    position = 99;
                } else {
                    position -= 1;
                }
            }
        }
        clicks_remaining -= 1;
    }

    let total_zeros = zeros + (position == 0 && delta < 0) as u32;

    Turn {
        start,
        delta,
        end: position,
        zeros: total_zeros,
    }
}

fn get_password(initial_dial_position: u32, deltas: Vec<i32>) -> u32 {
    deltas
        .into_iter()
        .scan(initial_dial_position, |prev_position, delta| {
            let turn = step(*prev_position, delta);
            *prev_position = turn.end;

            Some(turn)
        })
        .map(|t| t.zeros)
        .sum()
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
mod tests;
