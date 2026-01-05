use std::{
    cmp::Ordering,
    fs::File,
    io::{BufRead, BufReader, Error},
};

const FILE_PATH: &'static str = "./input.txt";

fn get_largest_joltage(bank: String) -> u32 {
    let bank_length = bank.len();

    let (highest_tens_index, highest_tens) = bank
        .chars()
        .map(|char| char.to_digit(10).unwrap())
        .enumerate()
        .fold(
            (0_usize, 0_u32),
            |current_max_enumerated, current_digit_enumerated| {
                let (current_index, digit) = current_digit_enumerated;
                let (_, highest_tens) = current_max_enumerated;

                if current_index == bank_length - 1 {
                    return current_max_enumerated;
                }

                let new_state = match digit.cmp(&highest_tens) {
                    Ordering::Greater => current_digit_enumerated,
                    Ordering::Equal | Ordering::Less => current_max_enumerated,
                };

                new_state
            },
        );

    let highest_ones = bank
        .chars()
        .skip(highest_tens_index.saturating_add(1))
        .map(|char| char.to_digit(10).unwrap())
        .max()
        .unwrap();

    let joltage_string = format!("{highest_tens}{highest_ones}");

    joltage_string.parse::<u32>().unwrap()
}

fn main() -> Result<(), Error> {
    let file = File::open(FILE_PATH)?;
    let lines = BufReader::new(file).lines();

    let sum: u32 = lines
        .flat_map(|line| line.map(|l| get_largest_joltage(l)))
        .sum();

    println!("SUM: {sum}");

    Ok(())
}

#[cfg(test)]
mod test {
    use super::*;

    #[test]
    fn ninety_eight_jolts() {
        let line = "987654321111111".to_string();
        assert_eq!(get_largest_joltage(line), 98);
    }

    #[test]
    fn eighty_nine_jolts() {
        let line = "811111111111119".to_string();
        assert_eq!(get_largest_joltage(line), 89);
    }

    #[test]
    fn seventy_eight_jolts() {
        let line = "234234234234278".to_string();
        assert_eq!(get_largest_joltage(line), 78);
    }

    #[test]
    fn ninety_two_jolts() {
        let line = "818181911112111".to_string();
        assert_eq!(get_largest_joltage(line), 92);
    }
}
