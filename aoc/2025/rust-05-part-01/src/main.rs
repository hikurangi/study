use std::{fs, io, num::ParseIntError};
use thiserror::Error;

#[derive(Error, Debug)]
enum AppError {
    #[error("Error parsing range: {0}")]
    RangeParse(#[from] RangeParseError),

    #[error("Error parsing int {0}")]
    ParseIntError(#[from] std::num::ParseIntError),

    #[error("IO error")]
    IoError(#[from] io::Error),
}

#[derive(Error, Debug)]
enum RangeParseError {
    #[error("Invalid range: \"{0}\"")]
    InvalidRange(String),

    #[error("Invalid range start: \"{0}\"")]
    InvalidRangeStart(String),

    #[error("Invalid range end: \"{0}\"")]
    InvalidRangeEnd(String),
}

const INPUT_FILE: &str = "./input.txt";

fn split_on_empty_line(path: &str) -> std::io::Result<(Vec<String>, Vec<String>)> {
    let contents = fs::read_to_string(path)?;

    let mut iter = contents.lines();

    let before: Vec<String> = iter
        .by_ref()
        .take_while(|line| !line.trim().is_empty())
        .map(String::from)
        .collect();

    let after: Vec<String> = iter.map(String::from).collect();

    Ok((before, after))
}

fn parse_range(range: &str) -> Result<(u64, u64), RangeParseError> {
    let (start_raw, end_raw) = range
        .trim()
        .split_once("-")
        .ok_or(RangeParseError::InvalidRange(range.to_string()))?;

    let start = start_raw
        .parse::<u64>()
        .map_err(|_| RangeParseError::InvalidRangeStart(start_raw.to_string()))?;

    let end = end_raw
        .parse::<u64>()
        .map_err(|_| RangeParseError::InvalidRangeEnd(end_raw.to_string()))?;

    Ok((start, end))
}

fn get_fresh_id_count(ranges: Vec<(u64, u64)>, ids: Vec<u64>) -> usize {
    ids.iter()
        .filter(|id| {
            ranges
                .iter()
                .any(|(start, end)| (*start..=*end).contains(*id))
        })
        .count()
}

fn main() -> Result<(), AppError> {
    let (raw_ranges, raw_ids) = split_on_empty_line(INPUT_FILE)?;
    let ranges = raw_ranges
        .iter()
        .map(|range| parse_range(range))
        .collect::<Result<Vec<(u64, u64)>, RangeParseError>>()?;

    let ids = raw_ids
        .iter()
        .map(|id| id.parse::<u64>())
        .collect::<Result<Vec<u64>, ParseIntError>>()?;

    let fresh_id_count = get_fresh_id_count(ranges, ids);
    println!("COUNT: {fresh_id_count}");

    Ok(())
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn example_data() {
        let ids = Vec::<u64>::from([1, 5, 8, 11, 17, 32]);
        let ranges = Vec::<(u64, u64)>::from([(3, 5), (10, 14), (16, 20), (12, 18)]);

        assert_eq!(get_fresh_id_count(ranges, ids), 3);
    }
}
