use std::collections::{HashMap, HashSet};

fn to_frequency_map(word: &str) -> HashMap<char, usize> {
        word.to_lowercase()
            .chars()
            .fold(HashMap::new(), |mut acc, c| {
                *acc.entry(c).or_insert(0) += 1;
                acc
            })
}

pub fn anagrams_for<'a>(word: &str, possible_anagrams: &'a[&'a str]) -> HashSet<&'a str> {
    let word_as_f_map = to_frequency_map(word);
    let anagrams = possible_anagrams.iter().copied().filter(|candidate| {
        let candidate_as_f_map = to_frequency_map(candidate);
        word_as_f_map == candidate_as_f_map && word.to_lowercase() != candidate.to_lowercase()
    });

    anagrams.collect()
}
