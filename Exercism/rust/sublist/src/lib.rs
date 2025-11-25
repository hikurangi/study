#[derive(Debug, PartialEq, Eq)]
pub enum Comparison {
    Equal,
    Sublist,
    Superlist,
    Unequal,
}

pub fn sublist(first_list: &[i32], second_list: &[i32]) -> Comparison {
    let is_first_sublist_of_second = first_list.is_empty()
        || second_list
            .windows(first_list.len())
            .any(|l| l == first_list);

    let is_first_superlist_of_second = second_list.is_empty()
        || first_list
            .windows(second_list.len())
            .any(|l| l == second_list);

    match (is_first_sublist_of_second, is_first_superlist_of_second) {
        (false, false) => Comparison::Unequal,
        (true, true) => Comparison::Equal,
        (true, false) => Comparison::Sublist,
        (false, true) => Comparison::Superlist,
    }
}
