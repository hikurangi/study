// use std::env;
use std::{
    fs::File,
    io::{self, BufRead, BufReader},
};

// file is read from project root?
// or is it relative to `cargo run` site
const FILE_PATH: &str = "./input.txt";

fn parse_signed(line: &str) -> Result<i32, &'static str> {
    let trimmed = line.trim(); // possibly unnecessary
    let mut chars = trimmed.chars();
    let sign = chars.next().ok_or("Empty string")?;
    let rest = chars.as_str();

    let magnitude: i32 = rest.parse().map_err(|_| "Invalid number")?;

    match sign {
        'R' => Ok(magnitude),
        'L' => Ok(-magnitude),
        _ => Err("Invalid sign"),
    }
}

fn main() -> io::Result<()> {
    let file = File::open(FILE_PATH)?;
    let reader = BufReader::new(file);

    // let mut password: u32 = 0;

    // read file line by line
    for line in reader.lines() {
        let line = line?;
        let parsed = parse_signed(&line);
        // L is negative, R is positive, else error
        // if running mod 100 total === 0, add to counter
        // return total
        // match line {}
        if parsed.is_ok() {
            println!("{}", parsed.unwrap());
        }
    }

    Ok(())
}

// test

#[cfg(test)]
mod tests {
    // Note this useful idiom: importing names from outer (for mod tests) scope.
    use super::*;

    #[test]
    fn postive_number() {
        let line: &str = "R11";
        assert_eq!(parse_signed(line), Ok(11_i32));
    }

    #[test]
    fn negative_number() {
        let line: &str = "L496";
        assert_eq!(parse_signed(line), Ok(-496));
    }

    #[test]
    fn empty_string() {
        let line: &str = "";
        assert_eq!(parse_signed(line), Err("Empty string"));
    }

    #[test]
    fn invalid_number() {
        let line: &str = "Labc";
        assert_eq!(parse_signed(line), Err("Invalid number"));
    }

    #[test]
    fn invalid_sign() {
        let line: &str = "X123";
        assert_eq!(parse_signed(line), Err("Invalid sign"));
    }
}
