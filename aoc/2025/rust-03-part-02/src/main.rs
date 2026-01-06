use std::{
    fs::File,
    io::{BufRead, BufReader, Error},
};

const FILE_PATH: &'static str = "./input.txt";

fn get_largest_joltage(mut num_length: usize, bank: String) -> u64 {
    let enumerated_joltage_bank = bank
        .chars()
        .map(|char| char.to_digit(10).unwrap() as u64)
        .enumerate()
        .collect::<Vec<(usize, u64)>>();

    let mut target_joltage_digits: Vec<u64> = Vec::with_capacity(num_length);
    let mut prev_max_index: usize = 0;

    while target_joltage_digits.len() < target_joltage_digits.capacity() {
        let start_idx = if target_joltage_digits.len() == 0 {
            0
        } else {
            prev_max_index + 1
        };
        let end_idx: usize = bank.len() - num_length;

        let current_joltage_chunk = Vec::from(&enumerated_joltage_bank[start_idx..=end_idx]);

        let (largest_item_index, current_max_joltage) = current_joltage_chunk
            .iter()
            .copied()
            .rev()
            // we need to reverse so that we get
            // the earliest possible max
            // in the event of a max tie below
            .max_by_key(|(_, joltage)| *joltage)
            .unwrap();

        target_joltage_digits.push(current_max_joltage);
        num_length -= 1;
        prev_max_index = largest_item_index;
    }

    let joltage_string = target_joltage_digits
        .iter()
        .map(|d| d.to_string())
        .collect::<String>();

    joltage_string.parse::<u64>().unwrap()
}

fn main() -> Result<(), Error> {
    let file = File::open(FILE_PATH)?;
    let lines = BufReader::new(file).lines();

    let sum: u64 = lines
        .flat_map(|line| line.map(|l| get_largest_joltage(12, l)))
        .sum();

    println!("SUM: {sum}");

    Ok(())
}

#[cfg(test)]
mod test {
    use super::*;
    #[test]
    fn ninety_eight_jolts_from_two_digits() {
        let line = "987654321111111".to_string();
        assert_eq!(get_largest_joltage(2, line), 98);
    }

    #[test]
    fn eighty_nine_jolts_from_two_digits() {
        let line = "811111111111119".to_string();
        assert_eq!(get_largest_joltage(2, line), 89);
    }

    #[test]
    fn seventy_eight_jolts_from_two_digits() {
        let line = "234234234234278".to_string();
        assert_eq!(get_largest_joltage(2, line), 78);
    }

    #[test]
    fn ninety_two_jolts_from_two_digits() {
        let line = "818181911112111".to_string();
        assert_eq!(get_largest_joltage(2, line), 92);
    }

    // TWELVE
    #[test]
    fn twelve_digits_1() {
        let line = "987654321111111".to_string();
        assert_eq!(get_largest_joltage(12, line), 987_654_321_111);
    }

    #[test]
    fn twelve_digits_2() {
        let line = "811111111111119".to_string();
        assert_eq!(get_largest_joltage(12, line), 811111111119);
    }

    #[test]
    fn twelve_digits_3() {
        let line = "234234234234278".to_string();
        assert_eq!(get_largest_joltage(12, line), 434234234278);
    }

    #[test]
    fn twelve_digits_4() {
        let line = "818181911112111".to_string();
        assert_eq!(get_largest_joltage(12, line), 888911112111);
    }
}
