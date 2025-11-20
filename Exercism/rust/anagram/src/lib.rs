use std::collections::{HashMap, HashSet};

fn to_frequency_map(word: &str) -> HashMap<char, usize> {
    word.chars().fold(HashMap::new(), |mut acc, c| {
        *acc.entry(c).or_insert(0) += 1;
        acc
    })
}

pub fn anagrams_for<'a>(word: &str, possible_anagrams: &'a [&'a str]) -> HashSet<&'a str> {
    let word_lowercased = word.to_lowercase();
    let word_as_f_map = to_frequency_map(&word_lowercased);

    possible_anagrams
        .iter()
        .copied()
        .filter(|candidate| {
            if candidate.len() != word.len() {
                return false;
            }
            let candidate_lowercased = candidate.to_lowercase();

            word_lowercased != candidate_lowercased
                && word_as_f_map == to_frequency_map(&candidate_lowercased)
        })
        .collect()
}
