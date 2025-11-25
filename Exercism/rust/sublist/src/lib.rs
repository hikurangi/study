#[derive(Debug, PartialEq, Eq)]
pub enum Comparison {
    Equal,
    Sublist,
    Superlist,
    Unequal,
}

pub fn sublist(first_list: &[i32], second_list: &[i32]) -> Comparison {
    match first_list.len().cmp(&second_list.len()) {
        std::cmp::Ordering::Equal => {
            if first_list == second_list {
                return Comparison::Equal;
            } else {
                return Comparison::Unequal;
            }
        }
        std::cmp::Ordering::Greater => {
            if second_list == []
                || first_list
                    .windows(second_list.len())
                    .any(|l| l == second_list)
            {
                return Comparison::Superlist;
            } else {
                return Comparison::Unequal;
            }
        }
        std::cmp::Ordering::Less => {
            if first_list == []
                || second_list
                    .windows(first_list.len())
                    .any(|l| l == first_list)
            {
                return Comparison::Sublist;
            } else {
                return Comparison::Unequal;
            }
        }
    }
}
