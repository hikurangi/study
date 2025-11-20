pub fn nth(n: u32) -> u32 {
    if n == 0 {
        2
    } else {
        let mut count = 2;
        let mut candidate = 3;
        while count < n + 1 {
            candidate += 1;

            if is_prime(candidate) {
                count += 1;
            }
        }
        return candidate;
    }
}

fn is_prime(candidate: u32) -> bool {
    if candidate < 2 {
        return false;
    }
    let mut d = 2;
    while d * d <= candidate {
        if candidate % d == 0 {
            return false;
        }
        d += 1;
    }
    true
}
