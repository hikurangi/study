module BinarySearchTree

type Node<'a> =
  { Left: Node<'a> option
    Data: 'a
    Right: Node<'a> option }

let left node = node.Left
let right node = node.Right
let data node = node.Data

let rec insert it = function
  | None -> { Left=None; Data=it; Right=None}
  | Some(n) when it <=n.Data -> {n with Left = Some(insert )}

let create (items: List<int>) =

    items
    |> List.fold (fun tree it -> Some(insert it tree)) None
//     items
//     |> List.fold insert (Tree(None, Some (List.head items), None))

let sortedData node = failwith ""
//     failwith "You need to implement this function."

// https://erichgess.github.io/blog/2016/03/21/purely-functional-data-structures-chapter-2-binary-search-trees/

// When inserting data into the tree structure; we first check whether the value is less than or greater than the root leaf. If less than, it is passed to left leaf, if greater than it is passed to the right leaf. We keep performing the check down the tree until we can insert the leaf.

// could try to implement as records with Left, Data and Right
