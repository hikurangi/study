use std::{
    collections::HashSet,
    fs::File,
    io::{BufRead, BufReader, Error},
};

use thiserror::Error;

#[derive(Debug, Error)]
enum AppError {
    #[error("Error reading line")]
    Io(#[from] Error),
    #[error("Parsing Error")]
    Parsing(#[from] ParsingError),
    #[error("Beam Progression Error")]
    BeamProgression(#[from] BeamSplitError),
    #[error("Empty input - first line missing")]
    FirstLineMissing,
}

#[derive(Debug, Error)]
enum ParsingError {
    #[error("Couldn't find a tachyon beam source")]
    MissingSource,
}

#[derive(Debug, Error, PartialEq)]
enum BeamSplitError {
    #[error("Split beam left index too low")]
    OutOfBoundsLeft,
    #[error("Split beam right index too high")]
    OutOfBoundsRight,
    #[error("Split beam right index numeric overflow")]
    PositionNumericOverflow,
    #[error("Beam split count numeric overflow")]
    CountNumericOverflow,
}
#[derive(Debug, Eq, PartialEq)]
enum Pixel {
    Source,
    Empty,
    Splitter,
}

const INPUT_FILE: &str = "./input.txt";

fn char_to_pixel(c: char) -> Pixel {
    match c {
        '.' => Pixel::Empty,
        '^' => Pixel::Splitter,
        'S' => Pixel::Source,
        c => panic!("Invalid character: \"{}\"", c),
    }
}

// TODO: if current_line is empty, skip this fn call altogether
fn progress_beams(
    (mut beam_split_count, prev_beam_indices): (usize, HashSet<usize>),
    current_line: Vec<Pixel>,
) -> Result<(usize, HashSet<usize>), BeamSplitError> {
    if current_line
        .iter()
        .all(|pixel| matches!(pixel, Pixel::Empty))
    {
        Ok((beam_split_count, prev_beam_indices.clone()))
    } else {
        let current_beam_indices = current_line
            .iter()
            .enumerate()
            .filter(|(i, _)| prev_beam_indices.contains(i))
            .try_fold(
                HashSet::<usize>::new(),
                |mut next_beam_indices, (i, pixel)| {
                    match pixel {
                        Pixel::Source | Pixel::Empty => {
                            next_beam_indices.insert(i);
                        }
                        Pixel::Splitter => {
                            let index_split_left =
                                i.checked_sub(1).ok_or(BeamSplitError::OutOfBoundsLeft)?;

                            let index_split_right = i
                                .checked_add(1)
                                .ok_or(BeamSplitError::PositionNumericOverflow)?;

                            if index_split_right >= current_line.len() {
                                return Err(BeamSplitError::OutOfBoundsRight);
                            }

                            let updated_beam_split_count = beam_split_count
                                .checked_add(1)
                                .ok_or(BeamSplitError::CountNumericOverflow)?;

                            next_beam_indices.remove(&i);
                            next_beam_indices.insert(index_split_left);
                            next_beam_indices.insert(index_split_right);

                            beam_split_count = updated_beam_split_count;
                        }
                    }

                    Ok(next_beam_indices)
                },
            )?;
        Ok((beam_split_count, current_beam_indices))
    }
}

fn get_beam_source_indices(line: String) -> Result<HashSet<usize>, AppError> {
    let source_char_indices = line
        .char_indices()
        .filter(|(_, c)| *c == 'S')
        .map(|(i, _)| i)
        .collect::<Vec<usize>>();

    if source_char_indices.len() == 0 {
        Err(AppError::Parsing(ParsingError::MissingSource))
    } else {
        Ok(HashSet::from_iter(source_char_indices))
    }
}

fn main() -> Result<(), AppError> {
    let file = File::open(INPUT_FILE).map_err(AppError::from)?;
    let reader = BufReader::new(file);
    let mut lines = reader.lines();
    let first_line = lines.next().ok_or(AppError::FirstLineMissing)??;

    let beam_source_indices = get_beam_source_indices(first_line)?;

    let (beam_split_count, _) = lines
        .map_while(Result::ok)
        .map(|line| line.chars().map(char_to_pixel).collect::<Vec<Pixel>>())
        .try_fold((0, beam_source_indices), progress_beams)?;

    println!("BEAM SPLIT COUNT: {beam_split_count}");

    Ok(())
}

#[cfg(test)]
mod test {
    use super::*;

    #[test]
    fn empty_line_maps_correctly() {
        let current_line = Vec::from(['.', '.', '.'].map(char_to_pixel));
        let prev_beam_indices = HashSet::from([1]);
        let split_count = 0;
        assert_eq!(
            progress_beams((split_count, prev_beam_indices), current_line)
                .expect("Malformed test data"),
            (0, HashSet::from([1]))
        );
    }

    #[test]
    fn splitter_line_maps_correctly() {
        let current_line = Vec::from(['.', '^', '.'].map(char_to_pixel));
        let prev_beam_indices = HashSet::from([1]);
        let split_count = 0;

        assert_eq!(
            progress_beams((split_count, prev_beam_indices), current_line)
                .expect("Malformed test data"),
            (1, HashSet::from([0, 2]))
        );
    }

    #[test]
    fn splitting_out_of_lower_bound_errors_as_expected() {
        let current_line = Vec::from(['^', '.', '.'].map(char_to_pixel));
        let prev_beam_indices = HashSet::from([0]);
        let split_count = 0;

        assert_eq!(
            progress_beams((split_count, prev_beam_indices), current_line),
            Err(BeamSplitError::OutOfBoundsLeft)
        )
    }

    #[test]
    fn splitting_out_of_upper_bound_errors_as_expected() {
        let current_line = Vec::from(['.', '.', '^'].map(char_to_pixel));
        let prev_beam_indices = HashSet::from([2]);
        let split_count = 0;

        assert_eq!(
            progress_beams((split_count, prev_beam_indices), current_line),
            Err(BeamSplitError::OutOfBoundsRight)
        )
    }
}
