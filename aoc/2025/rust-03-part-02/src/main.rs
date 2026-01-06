use std::{
    fs::File,
    io::{BufRead, BufReader, Error},
};

const FILE_PATH: &'static str = "./input.txt";

fn get_largest_joltage(num_length: usize, bank: &str) -> u64 {
    let digits: Vec<u64> = bank.bytes().map(|char| (char - b'0') as u64).collect();

    let mut result = Vec::with_capacity(num_length);
    let mut start = 0;

    for remaining in (0..num_length).rev() {
        let end = digits.len() - remaining;

        let mut max_digit = 0;
        let mut max_index = start;

        for (i, &d) in digits[start..end].iter().enumerate() {
            if d > max_digit {
                max_digit = d;
                max_index = start + i;
            }
        }

        result.push(max_digit);
        start = max_index + 1;
    }

    result
        .into_iter()
        .fold(0_u64, |total, digit| total * 10 + digit)
}

fn main() -> Result<(), Error> {
    let file = File::open(FILE_PATH)?;
    let lines = BufReader::new(file).lines();

    let sum: u64 = lines
        .filter_map(Result::ok)
        .map(|line| get_largest_joltage(12, &line))
        .sum();

    println!("SUM: {sum}");

    Ok(())
}

#[cfg(test)]
mod test {
    use super::*;
    #[test]
    fn ninety_eight_jolts_from_two_digits() {
        let line = "987654321111111";
        assert_eq!(get_largest_joltage(2, line), 98);
    }

    #[test]
    fn eighty_nine_jolts_from_two_digits() {
        let line = "811111111111119";
        assert_eq!(get_largest_joltage(2, line), 89);
    }

    #[test]
    fn seventy_eight_jolts_from_two_digits() {
        let line = "234234234234278";
        assert_eq!(get_largest_joltage(2, line), 78);
    }

    #[test]
    fn ninety_two_jolts_from_two_digits() {
        let line = "818181911112111";
        assert_eq!(get_largest_joltage(2, line), 92);
    }

    // TWELVE
    #[test]
    fn twelve_digits_1() {
        let line = "987654321111111";
        assert_eq!(get_largest_joltage(12, line), 987_654_321_111);
    }

    #[test]
    fn twelve_digits_2() {
        let line = "811111111111119";
        assert_eq!(get_largest_joltage(12, line), 811111111119);
    }

    #[test]
    fn twelve_digits_3() {
        let line = "234234234234278";
        assert_eq!(get_largest_joltage(12, line), 434234234278);
    }

    #[test]
    fn twelve_digits_4() {
        let line = "818181911112111";
        assert_eq!(get_largest_joltage(12, line), 888911112111);
    }
}
