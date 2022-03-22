module LinkedList

type Node<'a> =
    { data: 'a
      mutable next: Node<'a> option
      mutable prev: Node<'a> option }

type Deque<'a> =
    { mutable head: Node<'a> option
      mutable tail: Node<'a> option }

let mkLinkedList () = { head = None; tail = None }

let newNode data prevNode nextNode =
    Some
        { data = data
          prev = prevNode
          next = nextNode }

let addToEmpty newValue linkedList =
    let node = newNode newValue None None
    linkedList.head <- node
    linkedList.tail <- node

let pop linkedList = // remove and return item from end of linked list
    match linkedList.tail with
    | None -> failwith "Cannot perform pop on empty list"
    | Some tailNode ->
        tailNode.prev
        |> function
            | None -> linkedList.head <- None
            | _ -> ()

        linkedList.tail <- tailNode.prev
        tailNode.data

let shift linkedList = // remove and return item from start of linked list
    match linkedList.head with
    | None -> failwith "Cannot perform shift on empty list"
    | Some headNode ->
        linkedList.head <- headNode.next

        headNode.next
        |> function
            | None -> linkedList.tail <- None
            | _ -> ()

        headNode.data

let push newValue linkedList = // add item to end of linked list
    match linkedList.tail with
    | None -> addToEmpty newValue linkedList
    | Some tailNode ->
        let newNode = newNode newValue (Some tailNode) None
        tailNode.next <- newNode
        linkedList.tail <- newNode

let unshift newValue linkedList = // add item to start of linked list
    match linkedList.head with
    | None -> addToEmpty newValue linkedList
    | Some prevHeadNode ->
        let newHeadNode =
            newNode newValue None (Some prevHeadNode)

        prevHeadNode.prev <- newHeadNode
        linkedList.head <- newHeadNode
        linkedList.tail <- Some prevHeadNode
