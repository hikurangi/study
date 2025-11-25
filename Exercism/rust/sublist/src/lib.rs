use std::cmp::Ordering;

#[derive(Debug, PartialEq, Eq)]
pub enum Comparison {
    Equal,
    Sublist,
    Superlist,
    Unequal,
}

pub fn sublist(first_list: &[i32], second_list: &[i32]) -> Comparison {
    let first_list_length = first_list.len();
    let second_list_length = second_list.len();

    match first_list_length.cmp(&second_list_length) {
        Ordering::Equal => {
            if first_list == second_list {
                Comparison::Equal
            } else {
                Comparison::Unequal
            }
        }
        Ordering::Greater => {
            if second_list.is_empty()
                || first_list
                    .windows(second_list_length)
                    .any(|l| l == second_list)
            {
                Comparison::Superlist
            } else {
                Comparison::Unequal
            }
        }
        Ordering::Less => {
            if first_list.is_empty()
                || second_list
                    .windows(first_list_length)
                    .any(|l| l == first_list)
            {
                Comparison::Sublist
            } else {
                Comparison::Unequal
            }
        }
    }
}
