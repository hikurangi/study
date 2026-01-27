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

    #[error("Error parsing: \"{0}\"")]
    EvaluationError(#[from] EvaluationError),
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

#[derive(Error, Debug)]
enum EvaluationError {
    #[error("Empty column in number grid \"{0}\"")]
    EmptyColumn(String),
}

fn parse_number_line(line: Result<String, io::Error>) -> Result<Vec<u16>, ParseNumberError> {
    line?
        .split_whitespace()
        .map(|num_str| num_str.parse::<u16>().map_err(ParseNumberError::from))
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

#[derive(Clone, Copy)]
enum Operation {
    Addition,
    Multiplication,
}

fn is_line_header(line: &Result<String, io::Error>) -> bool {
    matches!(
        line.as_ref().ok().and_then(|s| s.as_bytes().first()),
        Some(b'+') | Some(b'*')
    )
}

fn evaluate_operations_by_column(
    header_row: &[Operation],
    number_rows: &[Vec<u16>],
) -> Result<Vec<u64>, EvaluationError> {
    header_row
        .iter()
        .copied()
        .enumerate()
        .map(|(i, operation)| {
            let mut column = number_rows.iter().filter_map(|row| row.get(i));

            let init = *column
                .next()
                .ok_or_else(|| EvaluationError::EmptyColumn(format!("{:#?}", number_rows)))?
                as u64;

            Ok(column.fold(init, |total, num| {
                let num = *num as u64;
                match operation {
                    Operation::Addition => total + num,
                    Operation::Multiplication => total * num,
                }
            }))
        })
        .collect::<Result<Vec<u64>, EvaluationError>>()
}

fn main() -> Result<(), AppError> {
    let file = File::open(INPUT_FILE)?;
    let reader = BufReader::new(file);

    let mut header_row = Vec::<Operation>::new();
    let mut number_rows = Vec::<Vec<u16>>::new();

    for line in reader.lines() {
        if is_line_header(&line) {
            header_row = parse_header_line(line)?
        } else {
            number_rows.push(parse_number_line(line)?)
        }
    }

    let results = evaluate_operations_by_column(&header_row, &number_rows)?;

    let sum = results.iter().sum::<u64>();
    println!("SUM!!! {sum}");

    Ok(())
}

#[cfg(test)]
mod test {
    use super::*;

    #[test]
    fn example_data() {
        let grid = [[123, 328, 51, 64], [45, 64, 387, 23], [6, 98, 215, 314]].map(Vec::<u16>::from);
        let headers = [
            Operation::Multiplication,
            Operation::Addition,
            Operation::Multiplication,
            Operation::Addition,
        ];
        let results = evaluate_operations_by_column(&headers, &grid).unwrap();

        assert_eq!(results.iter().sum::<u64>(), 4277556)
    }
}
