use std::{fs, io};
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

fn get_total_possible_fresh_ids(ranges: &mut Vec<(u64, u64)>) -> usize {
    ranges.sort_by(|(start_a, _), (start_b, _)| start_a.cmp(start_b));

    let mut fresh_id_count = 0;
    let mut prev_end = 0;
    for (start, end) in ranges {
        if *start > prev_end {
            fresh_id_count += (*start..=*end).count();
        } else {
            if *end <= prev_end {
                continue;
            } else {
                // start is <= prev_end and end is > prev_end
                fresh_id_count += ((prev_end + 1)..=*end).count();
            }
        }

        prev_end = *end;
    }

    fresh_id_count
}

fn main() -> Result<(), AppError> {
    let (raw_ranges, _raw_ids) = split_on_empty_line(INPUT_FILE)?;
    let mut ranges = raw_ranges
        .iter()
        .map(|range| parse_range(range))
        .collect::<Result<Vec<(u64, u64)>, RangeParseError>>()?;

    ranges.sort_by(|(start_a, _), (start_b, _)| start_a.cmp(start_b));

    let total_possible_fresh_id_count = get_total_possible_fresh_ids(&mut ranges);
    println!("COUNT: {total_possible_fresh_id_count}");

    Ok(())
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn counts_total_possible_fresh_ids() {
        let mut ranges = Vec::<(u64, u64)>::from([(3, 5), (10, 14), (16, 20), (12, 18)]);

        assert_eq!(get_total_possible_fresh_ids(&mut ranges), 14);
    }
}
