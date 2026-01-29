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

    #[error("Missing item from line")]
    MissingLineError,
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

fn parse_header_line(line: String) -> Result<Vec<Operation>, ParseHeaderError> {
    line.split_whitespace()
        .map(|operator_str| match operator_str {
            "+" => Ok(Operation::Addition),
            "*" => Ok(Operation::Multiplication),
            other => Err(ParseHeaderError::InvalidOperator(other.to_string())),
        })
        .collect()
}

const INPUT_FILE: &str = "./input.txt";

#[derive(Clone, Copy, Debug)]
enum Operation {
    Addition,
    Multiplication,
}

fn is_line_header(line: &str) -> bool {
    matches!(line.as_bytes().first(), Some(b'+') | Some(b'*'))
}

fn get_jump_sequence(header_row: &str) -> Vec<usize> {
    let mut current_jump_length = 0_usize;
    let mut sequence = Vec::<usize>::new();

    for (i, c) in header_row.chars().enumerate() {
        if i != 0 && (c == '+' || c == '*') {
            sequence.push(current_jump_length);
            current_jump_length = 1;
        } else {
            current_jump_length += 1;
        }
    }

    // NOTE: we add a fake trailing space to the last item (+1)
    // for consistent parsing down the line
    sequence.append(&mut vec![current_jump_length + 1]);
    sequence
}

fn chunk_by_jumps(jump_sequence: &[usize], line: &str) -> Vec<String> {
    let mut iter = line.chars();
    let mut result = Vec::with_capacity(jump_sequence.len());

    for &size in jump_sequence {
        let chunk: String = iter.by_ref().take(size.saturating_sub(1)).collect();
        result.push(chunk);
        // NOTE: skip the separator character
        iter.next();
    }

    result
}
fn process_column_cephalopod_style(operation: Operation, lines: Vec<String>) -> u64 {
    let item_length = lines.iter().peekable().peek().map(|s| s.len()).unwrap();

    // NOTE: addition and multiplication are commutative operations,
    // so we don't care that this is the wrong way round compared to our instructions
    // if we wanted to bulletproof this for non-commutative operations (division, subtraction),
    // we could reverse the number order
    (0..item_length).fold(0_u64, |total, i| {
        let cephalopod_number_string = lines
            .iter()
            // TODO: return a result -> malformed numeric data?
            .map(|string| string.chars().nth(i).unwrap())
            .collect::<String>();

        // TODO: return a result -> number parsing
        let cephalopod_number_parsed = cephalopod_number_string.trim().parse::<u64>().unwrap();

        match operation {
            Operation::Addition => total + cephalopod_number_parsed,
            Operation::Multiplication => {
                if total == 0 {
                    cephalopod_number_parsed
                } else {
                    total * cephalopod_number_parsed
                }
            }
        }
    })
}

fn main() -> Result<(), AppError> {
    let file = File::open(INPUT_FILE)?;
    let reader = BufReader::new(file);

    let mut header_str = String::new();
    let mut number_lines = Vec::<String>::new();

    for line in reader.lines() {
        let line = line?;

        if is_line_header(&line) {
            header_str = line;
            break;
        }

        number_lines.push(line);
    }

    let jump_sequence = get_jump_sequence(&header_str);
    let header_row = parse_header_line(header_str)?;

    // TODO: test!
    let chunked_number_lines = number_lines
        .iter()
        .map(|line| chunk_by_jumps(&jump_sequence, line))
        .collect::<Vec<Vec<String>>>();

    // TODO: extract this logic out!
    let columns = header_row
        .iter()
        .enumerate()
        .map(|(i, operation)| {
            let column = chunked_number_lines
                .iter()
                .map(|line| {
                    line.get(i)
                        .map(|l| l.clone())
                        .ok_or(AppError::MissingLineError)
                })
                .collect::<Result<Vec<String>, AppError>>();

            column.map(|col| (*operation, col))
        })
        .collect::<Result<Vec<(Operation, Vec<String>)>, AppError>>()?;

    let total = columns
        .iter()
        .map(|(operation, strings)| process_column_cephalopod_style(*operation, strings.clone()))
        .fold(0_u64, |total, n| total + n);

    println!("TOTAL {total}");

    Ok(())
}

#[cfg(test)]
mod test {
    use super::*;

    #[test]
    fn get_jump_sequence_produces_correct_jump_sequence_from_test_data() {
        let header_line = "*   +   *   +  ";

        assert_eq!(get_jump_sequence(header_line), Vec::from([4, 4, 4, 4]))
    }

    #[test]
    fn get_jump_sequence_produces_correct_jump_sequence_from_chunk_of_real_data() {
        let header_line = "*  *  +  +  *  +    *   ";

        assert_eq!(
            get_jump_sequence(header_line),
            Vec::from([3, 3, 3, 3, 3, 5, 5])
        )
    }

    #[test]
    fn chunker_chunks_strings_appropriately_from_test_data() {
        let chunkable = "123 328  51 64 ";
        let jump_sequence = Vec::from([4, 4, 4, 4]);

        assert_eq!(
            chunk_by_jumps(&jump_sequence, chunkable),
            Vec::from(["123", "328", " 51", "64 "])
        )
    }

    #[test]
    fn chunker_chunks_strings_appropriately_from_chunk_of_real_data() {
        let chunkable = "49 57 61 94 66 4    169 ";
        let jump_sequence = Vec::from([3, 3, 3, 3, 3, 5, 5]);

        assert_eq!(
            chunk_by_jumps(&jump_sequence, chunkable),
            Vec::from(["49", "57", "61", "94", "66", "4   ", "169 "])
        )
    }

    #[test]
    fn header_line_is_recognised() {
        let cases = ["+ ", "*   +"];
        for case in cases {
            assert!(is_line_header(&case))
        }
    }

    #[test]
    fn processes_multiplication_column_cephalopod_style() {
        let (operation, lines) = (
            Operation::Multiplication,
            Vec::from(["123", " 45", "  6"].map(String::from)),
        );

        assert_eq!(process_column_cephalopod_style(operation, lines), 8544)
    }

    #[test]
    fn processes_addition_column_cephalopod_style() {
        let (operation, lines) = (
            Operation::Addition,
            Vec::from(["328", "64 ", "98 "].map(String::from)),
        );

        assert_eq!(process_column_cephalopod_style(operation, lines), 625)
    }
}
