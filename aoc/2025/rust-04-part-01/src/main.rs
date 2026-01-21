use std::{
    fs::File,
    io::{BufRead, BufReader, Error},
};

const FILE_PATH: &'static str = "./input.txt";

#[derive(Clone, Copy, Debug)]
enum GridSquare {
    Paper,
    Empty,
}

const NEIGHBOURS_8: [(i32, i32); 8] = [
    (-1, -1),
    (0, -1),
    (1, -1),
    (-1, 0),
    (1, 0),
    (-1, 1),
    (0, 1),
    (1, 1),
];

fn parse_line(line: &str) -> Vec<GridSquare> {
    line.chars()
        .map(|c| match c {
            '@' => Ok(GridSquare::Paper),
            '.' => Ok(GridSquare::Empty),
            _ => Err("Invalid Char"),
        })
        .flatten()
        .collect::<Vec<GridSquare>>()
}

fn main() -> Result<(), Error> {
    let file = File::open(FILE_PATH)?;
    let lines = BufReader::new(file)
        .lines()
        .filter_map(Result::ok)
        .map(|line| parse_line(&line))
        .collect::<Vec<Vec<GridSquare>>>();

    let count: usize = count_removable_squares(lines);

    println!("COUNT: {count}");

    Ok(())
}

fn get_all_neighbour_coordinates_8(
    row: usize,
    col: usize,
    height: usize,
    width: usize,
) -> Vec<(usize, usize)> {
    let row = row as i32;
    let col = col as i32;
    let height = height as i32;
    let width = width as i32;
    let mut neighbours: Vec<(usize, usize)> = Vec::new();

    for (dr, dc) in NEIGHBOURS_8 {
        let nr = row + dr;
        let nc = col + dc;

        if nr >= 0 && nr < height && nc >= 0 && nc < width {
            neighbours.push((nr as usize, nc as usize));
        }
    }

    neighbours
}

fn count_removable_squares(wall: Vec<Vec<GridSquare>>) -> usize {
    let mut count: usize = 0;

    // NOTE: assumes a uniform grid
    let height = wall.len();
    let width = wall.iter().next().map(|row| row.len()).unwrap();

    for (y, line) in wall.iter().enumerate() {
        for (x, square) in line.iter().enumerate() {
            let neighbour_coordinates = get_all_neighbour_coordinates_8(y, x, height, width);

            let paper_neighbours = neighbour_coordinates
                .iter()
                .filter_map(|(row, col)| wall.get(*row).and_then(|row| row.get(*col)))
                .filter(|neighbour| matches!(**neighbour, GridSquare::Paper))
                .collect::<Vec<&GridSquare>>();

            if matches!(square, GridSquare::Paper) && paper_neighbours.len() < 4 {
                count += 1;
            }
        }
    }

    count
}

#[cfg(test)]
mod test {

    use super::*;

    #[test]
    fn one_square() {
        let lines = Vec::from(["...", ".@.", "..."].map(parse_line));

        assert_eq!(count_removable_squares(lines), 1);
    }

    #[test]
    fn aoc_example() {
        let lines = Vec::from(
            [
                "..@@.@@@@.",
                "@@@.@.@.@@",
                "@@@@@.@.@@",
                "@.@@@@..@.",
                "@@.@@@@.@@",
                ".@@@@@@@.@",
                ".@.@.@.@@@",
                "@.@@@.@@@@",
                ".@@@@@@@@.",
                "@.@.@@@.@.",
            ]
            .map(parse_line),
        );

        assert_eq!(count_removable_squares(lines), 13);
    }

    // 1. Happy-path / interior behaviour

    // These establish the core contract.
    #[test]
    fn interior_cell_has_eight_neighbours() {
        assert_eq!(get_all_neighbour_coordinates_8(1, 1, 3, 3).len(), 8);
    }

    // 	• interior_neighbours_do_not_include_self
    // 	• interior_neighbours_are_all_distinct
    // 	• interior_neighbours_are_all_in_bounds

    // 2. Edge and corner cases (the most important group)

    // This is where most bugs live.

    // Corners
    #[test]
    fn top_left_corner_has_three_neighbours() {
        assert_eq!(get_all_neighbour_coordinates_8(0, 0, 3, 3).len(), 3);
    }

    #[test]
    fn top_right_corner_has_three_neighbours() {
        assert_eq!(get_all_neighbour_coordinates_8(0, 2, 3, 3).len(), 3);
    }

    #[test]
    fn bottom_left_corner_has_three_neighbours() {
        assert_eq!(get_all_neighbour_coordinates_8(2, 0, 3, 3).len(), 3);
    }

    #[test]
    fn bottom_right_corner_has_three_neighbours() {
        assert_eq!(get_all_neighbour_coordinates_8(2, 2, 3, 3).len(), 3);
    }

    // Edges (non-corner)
    #[test]
    fn top_edge_cell_has_five_neighbours() {
        assert_eq!(get_all_neighbour_coordinates_8(0, 1, 3, 3).len(), 5);
    }

    #[test]
    fn bottom_edge_cell_has_five_neighbours() {
        assert_eq!(get_all_neighbour_coordinates_8(2, 1, 3, 3).len(), 5);
    }

    #[test]
    fn left_edge_cell_has_five_neighbours() {
        assert_eq!(get_all_neighbour_coordinates_8(1, 0, 3, 3).len(), 5);
    }

    #[test]
    fn right_edge_cell_has_five_neighbours() {
        assert_eq!(get_all_neighbour_coordinates_8(1, 2, 3, 3).len(), 5);
    }

    // 3. Degenerate grid sizes
    // These catch incorrect assumptions about dimensions.
    // 	• single_cell_grid_has_no_neighbours
    // 	• single_row_grid_middle_cell_has_two_neighbours
    // 	• single_column_grid_middle_cell_has_two_neighbours
    // 	• two_by_two_grid_corner_has_three_neighbours
    // 	• two_by_two_grid_interior_does_not_exist

    // 4. Bounds safety & robustness
    // These ensure correctness under stress, not just correctness of output.
    // 	• never_produces_negative_indices
    // 	• never_produces_indices_equal_to_width_or_height
    // 	• neighbour_count_never_exceeds_eight

    // 5. Determinism and stability
    // Important for reproducibility and reasoning.
    // 	• neighbour_iteration_order_is_stable
    // 	• repeated_calls_produce_identical_results

    // (You may or may not want to lock in order. Deciding that is part of the design.)

    // 6. Integration-level sanity checks
    // Tests that combine enumeration with a simple use case.
    // 	• counts_all_adjacent_mines_correctly
    // 	• empty_board_produces_zero_for_all_cells
    // 	• full_board_produces_max_counts_for_interior_cells

    // 7. Property-style thinking (even without property tests)
    // These are conceptual invariants you can later mechanise.
    // 	• neighbours_are_symmetric_where_possible
    // 	• total_neighbour_links_match_expected_graph_degree_sum
    // 	• moving_one_cell_changes_neighbour_set_locally

    // 8. Performance-adjacent (optional but common)

    // Not benchmarks yet, just guardrails.
    // 	• does_not_allocate
    // 	• does_not_panic_on_large_grids
}
