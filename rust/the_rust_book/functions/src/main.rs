// fn main() {
//     print_labeled_measurements(5, 'h');
// }

// fn print_labeled_measurements(value: i32, unit_label: char) {
//     println!("The measurement is: {value}{unit_label}");
// }

// fn main() {
//     let y = {
//         let x = 3;
//         x + 1
//     };

//     println!("The value of y is: {y}");
// }

// fn main() {
//     let x = five();

//     println!("The value of x is: {x}");
// }

// fn five() -> i32 {
//     5
// }

fn main() {
    let x = plus_one(5);

    println!("The value of x is: {x}");
}

fn plus_one(x: i32) -> i32 {
    x + 1
}
