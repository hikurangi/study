pub fn nth(n: u32) -> u32 {
    // I think this range would overflow before the unwrap call panics?
    (2..).filter(|x| is_prime(*x)).nth(n as usize).unwrap()
}

fn is_prime(n: u32) -> bool {
    !(2..=(n as f32).sqrt() as u32).any(|x| n % x == 0)
}
