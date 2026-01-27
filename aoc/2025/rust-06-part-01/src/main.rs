use std::{
    fs::File,
    io::{self, BufRead, BufReader},
    num::ParseIntError,
};
use thiserror::Error;

#[derive(Error, Debug)]
enum AppError {
    #[error("IO error")]
    Io(#[from] io::Error),

    #[error("Error parsing: \"{0}\"")]
    ParseNumberError(#[from] ParseNumberError),

    #[error("Error parsing: \"{0}\"")]
    ParseHeaderError(#[from] ParseHeaderError),
}

#[derive(Error, Debug)]
enum ParseNumberError {
    #[error("Error parsing number: \"{0}\"")]
    InvalidInteger(#[from] ParseIntError),

    #[error("Error reading line: \"{0}\"")]
    Io(#[from] io::Error),
}

#[derive(Error, Debug)]
enum ParseHeaderError {
    #[error("Error reading line: \"{0}\"")]
    Io(#[from] io::Error),

    #[error("Invalid operator: \"{0}\"")]
    InvalidOperator(String),
}

fn parse_number_line(line: Result<String, io::Error>) -> Result<Vec<u16>, ParseNumberError> {
    line?
        .split_whitespace()
        // .map(|num_str| num_str.parse::<u16>().map_err(ParseError::from)) // also works
        .map(|num_str| Ok(num_str.parse::<u16>()?))
        .collect()
}

fn parse_header_line(line: Result<String, io::Error>) -> Result<Vec<Operation>, ParseHeaderError> {
    line?
        .split_whitespace()
        .map(|operator_str| match operator_str {
            "+" => Ok(Operation::Addition),
            "*" => Ok(Operation::Multiplication),
            other => Err(ParseHeaderError::InvalidOperator(other.to_string())),
        })
        .collect()
}

const INPUT_FILE: &str = "./input.txt";

enum Operation {
    Addition,
    Multiplication,
}

fn line_is_header(line: &Result<String, io::Error>) -> bool {
    line.as_ref()
        .ok()
        .and_then(|s| s.chars().next())
        .is_some_and(|c| c == '+' || c == '*')
}

fn evaluate_operations(header_row: Vec<Operation>, number_rows: Vec<Vec<u16>>) -> Vec<u64> {
    header_row
        .iter()
        .enumerate()
        .map(|(i, operation)| {
            let mut column = number_rows.iter().filter_map(|row| row.get(i));

            let init = *column.next().unwrap() as u64;
            column.fold(init, |total, num| match operation {
                Operation::Addition => total + (*num as u64),
                Operation::Multiplication => total * (*num as u64),
            })
        })
        .collect()
}

fn main() -> Result<(), AppError> {
    let file = File::open(INPUT_FILE)?;
    let reader = BufReader::new(file);

    let mut header_row = Vec::<Operation>::new();
    let mut number_rows = Vec::<Vec<u16>>::new();

    // TODO: fold which returns a result which can be propagated out at the top level later
    for line in reader.lines() {
        if line_is_header(&line) {
            header_row = parse_header_line(line)?
        } else {
            number_rows.push(parse_number_line(line)?)
        }
    }

    let results = evaluate_operations(header_row, number_rows);

    let sum = results.iter().sum::<u64>();
    println!("SUM!!! {sum}");

    Ok(())
}

#[cfg(test)]
mod test {
    use super::*;

    #[test]
    fn example_data() {
        let grid = Vec::<Vec<u16>>::from(
            [[123, 328, 51, 64], [45, 64, 387, 23], [6, 98, 215, 314]].map(Vec::from),
        );
        let headers = Vec::from([
            Operation::Multiplication,
            Operation::Addition,
            Operation::Multiplication,
            Operation::Addition,
        ]);
        let results = evaluate_operations(headers, grid);

        assert_eq!(results.iter().sum::<u64>(), 4277556)
    }
}
