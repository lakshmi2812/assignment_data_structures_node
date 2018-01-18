class Node {
  constructor(data) {
    this.word = data.word;
    this.definition = data.definition;
    this.next = null;
  }
  //
  // next() {
  //   return this.next;
  // }
  //
  // setNext(node) {
  //   this.next = node;
  // }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  addToEnd(node) {
    this.size += 1;
    if (!this.head) {
      this.head = node;
      this.tail = node;
      return true;
    }
    this.tail.next = node;
    this.tail = node;
  }

  insertNode(node, index) {
    //Head is index 1
    //

    if (index < 1) {
      return false;
    }

    if (index > this.size) {
      return console.error("Index out of bounds");
    }

    if (index == 1) {
      node.next = this.head;
      this.head = node;
    }

    let prevNode = readNode(index - 1);

    if (prevNode === this.tail) {
      this.tail = node;
    }
    //if the user gives index 5, find the node at index 4, then find the next of 4 (5)
    let prevNext = prevNode.next;
    //this is node 5
    //1,2,3,4,5,6,7,8
    //4=prevNode, 5=prevNext
    //4.next(e)
    //1,2,3,4,e
    //e.next(prevNode)
    //1,2,3,4,e,5,6,7,8
    //1,2,3,4,e

    prevNode.next = node;
    node.next = prevNext;
    this.size += 1;
  }

  readNode(index) {
    //Head is index 1

    //Big 0 for this method is O(n)

    if (index > this.size) {
      return console.error("Index out of bounds");
    }

    let currentNode = this.head;
    let remainingSteps = index - 1;

    for (let i = 0; i < remainingSteps; i++) {
      console.log(i);

      currentNode = currentNode.next;
    }
    return currentNode;
  }

  reverseList() {
    // a = 1;
    // b = 2;
    // //swap a and b
    // c = a;
    // a = b;
    // b = c;
    // //a -head b--tail
    // let placeHolder = this.head;
    // this.head = this.tail;
    // this.tail = placeholder;
    //if()
    //Swapping way
    let previousNode = this.head;
    let currentNode = this.head.next;
    let nextNode = currentNode.next;
    while (previousNode !== this.tail) {
      currentNode.next = previousNode;
      previousNode = currentNode;
      currentNode = nextNode;
      if (nextNode) {
        nextNode = nextNode.next;
      }
    }
    this.head.next = null;
    let placeHolder = this.head;
    this.head = this.tail;
    this.tail = placeHolder;
  }
}

//Testing

let new_node = new Node({ word: "cat", definition: "stupid animal" });
console.log(new_node.next);

let list = new LinkedList();

list.addToEnd(new Node({ word: "cat", definition: "stupid animal" }));
list.addToEnd(new Node({ word: "dog", definition: "cute animal" }));
list.addToEnd(new Node({ word: "rose", definition: "nice flower" }));
list.addToEnd(new Node({ word: "hi", definition: "greeting" }));
list.addToEnd(new Node({ word: "bye", definition: "farewell" }));

console.log("Initial List: *****************");
for (let i = 1; i < list.size + 1; i++) {
  console.log(list.readNode(i));
}
list.reverseList();
console.log("Reversed List: *****************");
for (let i = 1; i < list.size + 1; i++) {
  console.log(list.readNode(i));
}
// list.readNode(5);
// list.readNode(2);
