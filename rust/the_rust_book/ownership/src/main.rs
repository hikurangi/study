fn main() {
    // an immutable string literal is hardcoded into a compiled executable

    // a mutable string, must be assigned to the heap, since it can change.
    // String::from() requests the memory it needs.
    // let mut s = String::from("hello");

    // s.push_str(", world!");

    // println!("{}", s);

    // Move

    // outside the inner scope, the drop() function has been called, and s is out of scope / unavailable
    // RAII-ish(?)

    // let s1 = String::from("hello");

    // In other languages, the line below might be considered a 'shallow copy', where the pointer, length and capacity of a piece of data is duplicated, without the full contents.

    // In Rust however, this is treated differently. It is a 'move', which means that, for memory safety purposes, the 'copied' data (s1) is no longer considered valid by the compiler. Rust won't let you use the invalidated s1 reference!

    // let s2 = s1;

    // Below throws -> 'value borrowed here after move'
    // println!("{}, world!", s1);

    // Rust will never automatically create 'deep' copies of data

    // We can however use the clone() method to assign s2 as a deep copy of s1, and keep both references alive, should we be ok with the performance cost.
    // let s1 = String::from("hello");

    // The benefit here is that we are *explicitly* performing an expensive deep copy.
    // let s2 = s1.clone();

    // println!("s1 = {}, s2 = {}", s1, s2);

    // Copy
    // let x = 5;
    // let y = x;

    // println!("x = {}, y = {}", x, y);
    let s1 = String::from("hello");

    let (s2, len) = calculate_length(s1);

    println!("The length of '{s2}' is {len}.");
}

fn calculate_length(s: String) -> (String, usize) {
    let length = s.len(); // len() returns the length of a String

    (s, length)
}
