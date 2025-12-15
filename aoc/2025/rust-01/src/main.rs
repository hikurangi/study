// use std::env;
use std::fs;

// file is read from project root?
// or is it relative to `cargo run` site
const FILE_PATH: &str = "./input.txt";

fn main() {
    println!("read file {FILE_PATH}");

    let contents = fs::read_to_string(FILE_PATH).expect("Should have been able to read the file");

    println!("With text:\n{contents}");
}
