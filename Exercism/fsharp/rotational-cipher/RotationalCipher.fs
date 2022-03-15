module RotationalCipher

let rotateCharacterFrom startChar shiftKey character = (int character - int startChar + shiftKey) % 26 + int startChar |> char

let rotate shiftKey = String.map (function
        | c when System.Char.IsLower c -> rotateCharacterFrom 'a' shiftKey c
        | c when System.Char.IsUpper c -> rotateCharacterFrom 'A' shiftKey c
        | c -> c)
