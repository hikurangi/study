use std::{
    fs::File,
    io::{Error, Read},
};

use itertools::Itertools;

const FILE_PATH: &str = "./input.txt";

fn get_invalid_ids_for_range(start: u64, end: u64) -> Vec<u64> {
    (start..=end)
        .filter(|id_as_int| {
            if *id_as_int < 10 {
                return false;
            }

            let id_as_str = id_as_int.to_string();
            let id_length = id_as_str.len();
            let midpoint = id_length / 2;
            if midpoint == 0 {
                return false;
            }

            (1..=midpoint).any(|chunk_size| {
                if id_length % chunk_size != 0 {
                    return false;
                }

                let chunks = id_as_str.chars().chunks(chunk_size);
                let first_chunk = chunks
                    .into_iter()
                    .next()
                    .map(|chunk| chunk.collect::<String>());

                return first_chunk.is_some_and(|first_chunk| {
                    chunks
                        .into_iter()
                        .all(|chunk| chunk.collect::<String>() == first_chunk)
                });
            })
        })
        .collect::<Vec<u64>>()
}

fn main() -> Result<(), Error> {
    let mut file = File::open(FILE_PATH)?;
    let mut buffer = String::new();
    file.read_to_string(&mut buffer)?;

    let ranges = buffer.split(',');
    let invalid_id_sum: u64 = ranges.fold(0, |mut sum, range| {
        let (start_str, end_str) = range.split_once('-').unwrap();

        let start: u64 = start_str.parse().unwrap();
        let end: u64 = end_str.parse().unwrap();

        let invalid_ids_for_current_range = get_invalid_ids_for_range(start, end);

        sum += invalid_ids_for_current_range.iter().sum::<u64>();
        sum
    });

    println!("SUM {invalid_id_sum}");

    Ok(())
}

#[cfg(test)]
mod test {
    use super::*;

    // 11-22 still has two invalid IDs, 11 and 22. ✅
    #[test]
    fn range_in_tens() {
        let start = 11;
        let end = 22;

        assert_eq!(get_invalid_ids_for_range(start, end), Vec::from([11, 22]))
    }

    // 95-115 now has two invalid IDs, 99 and 111.
    #[test]
    fn range_in_tens_to_hundreds() {
        let start = 95;
        let end = 116;

        assert_eq!(get_invalid_ids_for_range(start, end), Vec::from([99, 111]))
    }

    // 998-1012 now has two invalid IDs, 999 and 1010.
    #[test]
    fn range_in_hundreds_to_thousands() {
        let start = 998;
        let end = 1012;

        assert_eq!(
            get_invalid_ids_for_range(start, end),
            Vec::from([999, 1010])
        )
    }

    // 1188511880-1188511890 still has one invalid ID, 1188511885.
    #[test]
    fn range_in_billions() {
        let start = 1_188_511_880;
        let end = 1_188_511_890;

        assert_eq!(
            get_invalid_ids_for_range(start, end),
            Vec::from([1_188_511_885])
        )
    }

    // 222220-222224 still has one invalid ID, 222222.
    #[test]
    fn range_in_hundreds_of_thousands() {
        let start = 222_220;
        let end = 222_224;

        assert_eq!(get_invalid_ids_for_range(start, end), Vec::from([222_222]))
    }

    // 1698522-1698528 still contains no invalid IDs.
    #[test]
    fn no_valid_ids() {
        let start = 1_698_522;
        let end = 1_698_528;

        assert_eq!(get_invalid_ids_for_range(start, end), Vec::new())
    }

    // 446443-446449 still has one invalid ID, 446446.
    #[test]
    fn range_also_in_hundreds_of_thousands() {
        let start = 446_443;
        let end = 446_449;

        assert_eq!(get_invalid_ids_for_range(start, end), Vec::from([446_446]))
    }

    // 38593856-38593862 still has one invalid ID, 38593859.
    #[test]
    fn range_in_tens_of_millions() {
        let start = 38_593_856;
        let end = 38_593_862;

        assert_eq!(
            get_invalid_ids_for_range(start, end),
            Vec::from([38_593_859])
        )
    }

    // 565653-565659 now has one invalid ID, 565656.
    #[test]
    fn range_also_also_in_hundreds_of_thousands() {
        let start = 565_653;
        let end = 565_659;

        assert_eq!(get_invalid_ids_for_range(start, end), Vec::from([565_656]))
    }

    // 824824821-824824827 now has one invalid ID, 824824824.
    #[test]
    fn range_in_hundreds_of_millions() {
        let start = 824_824_821;
        let end = 824_824_827;

        assert_eq!(
            get_invalid_ids_for_range(start, end),
            Vec::from([824_824_824])
        )
    }

    // 2121212118-2121212124 now has one invalid ID, 2121212121.
    #[test]
    fn range_also_in_billions() {
        let start = 2_121_212_118;
        let end = 2_121_212_124;

        assert_eq!(
            get_invalid_ids_for_range(start, end),
            Vec::from([2_121_212_121])
        )
    }
}
