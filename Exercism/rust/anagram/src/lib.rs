use std::collections::HashSet;

fn sort_string(word: &str) -> Vec<char> {
    let mut copied_word_vec = word.chars().collect::<Vec<char>>();
    copied_word_vec.sort();
    copied_word_vec
}

pub fn anagrams_for<'a>(word: &str, possible_anagrams: &[&'a str]) -> HashSet<&'a str> {
    let word_lowercased = word.to_lowercase();
    let word_sorted = sort_string(&word_lowercased);

    possible_anagrams
        .iter()
        .copied()
        .filter(|candidate| {
            if candidate.len() != word.len() {
                return false;
            }
            let candidate_lowercased = candidate.to_lowercase();

            word_lowercased != candidate_lowercased
                && word_sorted == sort_string(&candidate_lowercased)
        })
        .collect()
}
