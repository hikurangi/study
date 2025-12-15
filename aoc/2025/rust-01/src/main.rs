// use std::env;
use std::{
    fs::File,
    io::{self, BufRead, BufReader},
};

// file is read from project root?
// or is it relative to `cargo run` site
const FILE_PATH: &str = "./input.txt";

fn main() -> io::Result<()> {
    let file = File::open(FILE_PATH)?;
    let reader = BufReader::new(file);

    // let mut password: u32 = 0;

    // read file line by line
    for line in reader.lines() {
        let line = line?;
        // L is negative, R is positive, else error
        // if running mod 100 total === 0, add to counter
        // return total
        println!("{line}");
    }

    Ok(())
}
