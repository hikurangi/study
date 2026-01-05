use std::{
    fs::File,
    io::{Error, Read},
};

const FILE_PATH: &str = "./input.txt";

fn main() -> Result<(), Error> {
    let mut file = File::open(FILE_PATH)?;
    let mut buffer = String::new();
    file.read_to_string(&mut buffer)?;

    let ranges = buffer.split(',');
    let mut invalid_ids = Vec::<u64>::new();
    for range in ranges {
        let (start_str, end_str) = range.split_once('-').unwrap();

        let start_value: u64 = start_str.parse().unwrap();
        let end_value: u64 = end_str.parse().unwrap();

        let invalid_ids_for_current_range = (start_value..=end_value)
            .filter(|n| {
                if *n < 10_u64 {
                    return false;
                }

                let n_as_str = n.to_string();
                let midpoint = n_as_str.len() / 2;
                if midpoint == 0 {
                    return false;
                }

                let (first_half, second_half) = n_as_str.split_at(midpoint);
                first_half == second_half
            })
            .collect::<Vec<u64>>();

        invalid_ids.extend(invalid_ids_for_current_range);
    }

    let sum: u64 = invalid_ids.into_iter().sum();
    println!("SUM {sum}");

    Ok(())
}
