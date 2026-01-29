use std::{
    fs::File,
    io::{self, BufRead, BufReader},
    num::ParseIntError,
    string::FromUtf8Error,
};
use thiserror::Error;

#[derive(Error, Debug)]
enum AppError {
    #[error("IO error")]
    Io(#[from] io::Error),

    #[error("Error parsing row: \" {0}\"")]
    ParseStringFromUtf8BytesError(#[from] FromUtf8Error),

    #[error(
        "Non-rectangular grid. Expected line of length \"{expected_width:?}\", instead got: \"{actual_line:?}\""
    )]
    NonRectangularGrid {
        expected_width: Option<usize>,
        actual_line: String,
    },

    #[error("Error parsing: \"{0}\"")]
    ParseNumberError(#[from] ParseNumberError),

    #[error("Error parsing: \"{0}\"")]
    ParseHeaderError(#[from] ParseHeaderError),

    #[error("Missing item from line")]
    MalformedDataError,
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

fn read_header_and_numbers(reader: BufReader<File>) -> Result<(String, Vec<String>), AppError> {
    let mut expected_width: Option<usize> = None;

    reader.lines().try_fold(
        (String::new(), Vec::<String>::new()),
        |(mut header_line, mut number_lines), current_line| {
            let line = current_line?;

            expected_width.get_or_insert(line.len());
            if expected_width.is_some_and(|width| width != line.len()) {
                return Err(AppError::NonRectangularGrid {
                    expected_width: expected_width,
                    actual_line: line,
                });
            }

            if matches!(line.as_bytes().first(), Some(b'+') | Some(b'*')) {
                header_line = line;
            } else {
                number_lines.push(line);
            }

            Ok((header_line, number_lines))
        },
    )
}

fn get_jump_sequence(header_row: &str) -> Vec<usize> {
    let mut sequence = Vec::<usize>::new();
    let mut current_jump_length = 0_usize;

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
    sequence.push(current_jump_length + 1);
    sequence
}

fn chunk_by_jumps(jumps: &[usize], line: &str) -> Vec<String> {
    let mut iter = line.chars();

    jumps
        .iter()
        .map(|&n| {
            let chunk = iter.by_ref().take(n - 1).collect();
            iter.next();
            chunk
        })
        .collect()
}

fn process_column_cephalopod_style(
    operation: Operation,
    lines: &[String],
) -> Result<u64, AppError> {
    let item_length = lines.first().ok_or(AppError::MalformedDataError)?.len();

    // NOTE: addition and multiplication are commutative operations,
    // so we don't care that this is the wrong way round compared to our instructions
    // if we wanted to bulletproof this for non-commutative operations (division, subtraction),
    // we could reverse the number order

    (0..item_length).try_fold(0_u64, |total, i| {
        let cephalopod_number_string = lines
            .iter()
            // TODO: .nth() performance trap?
            .map(|string| string.chars().nth(i).ok_or(AppError::MalformedDataError))
            .collect::<Result<String, AppError>>()?;

        let cephalopod_number_parsed = cephalopod_number_string
            .trim()
            .parse::<u64>()
            .map_err(ParseNumberError::from)?;

        Ok(match operation {
            Operation::Addition => total + cephalopod_number_parsed,
            Operation::Multiplication => {
                if total == 0 {
                    cephalopod_number_parsed
                } else {
                    total * cephalopod_number_parsed
                }
            }
        })
    })
}

fn columns_from_rows(
    operations: &[Operation],
    rows: &[Vec<String>],
) -> Result<Vec<(Operation, Vec<String>)>, AppError> {
    operations
        .iter()
        .enumerate()
        .map(|(i, &operation)| {
            let column = rows
                .iter()
                .map(|row| row.get(i).cloned().ok_or(AppError::MalformedDataError))
                .collect::<Result<Vec<_>, _>>()?;

            Ok((operation, column))
        })
        .collect::<Result<Vec<(Operation, Vec<String>)>, AppError>>()
}

fn main() -> Result<(), AppError> {
    let file = File::open(INPUT_FILE)?;
    let reader = BufReader::new(file);

    let (header_line, number_lines) = read_header_and_numbers(reader)?;

    let jump_sequence = get_jump_sequence(&header_line);
    let header_row = parse_header_line(header_line)?;

    let chunked_number_lines = number_lines
        .into_iter()
        .map(|line| chunk_by_jumps(&jump_sequence, &line))
        .collect::<Vec<Vec<String>>>();

    let columns = columns_from_rows(&header_row, &chunked_number_lines)?;

    let total = columns
        .iter()
        .map(|(operation, strings)| process_column_cephalopod_style(*operation, strings))
        .try_fold(0_u64, |total, n| n.map(|n| n + total))?;

    println!("TOTAL {total}");

    Ok(())
}

#[cfg(test)]
mod test {
    use super::*;

    const TEST_FILE: &str = "./test.txt";

    // unit
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
    fn processes_multiplication_column_cephalopod_style() {
        let (operation, lines) = (
            Operation::Multiplication,
            ["123", " 45", "  6"].map(String::from),
        );

        assert_eq!(
            process_column_cephalopod_style(operation, &lines)
                .expect("Error with test multiplication column"),
            8544
        )
    }

    #[test]
    fn processes_addition_column_cephalopod_style() {
        let (operation, lines) = (Operation::Addition, ["328", "64 ", "98 "].map(String::from));

        assert_eq!(
            process_column_cephalopod_style(operation, &lines)
                .expect("Error with test addition column"),
            625
        )
    }
    // integration
    #[test]
    fn reads_test_data_correctly() {
        let file = File::open(TEST_FILE)
            .expect("Error creating file handle for test file \"{TEST_FILE}\"");
        let reader = BufReader::new(file);

        let (header_line, number_lines) =
            read_header_and_numbers(reader).expect("Error reading test file from disk.");

        // NOTE: Vscode removes trailing spaces?
        // Or is that an OS thing?
        assert_eq!(header_line, "*   +   *   +  ");
        assert_eq!(
            number_lines,
            Vec::from(["123 328  51 64 ", " 45 64  387 23 ", "  6 98  215 314",])
        )
    }
}
