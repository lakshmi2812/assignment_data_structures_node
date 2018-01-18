class Node {
  constructor(data) {
    this.word = data.word;
    this.definition = data.definition;
    this.next = null;
  }

  next() {
    return this.next;
  }

  setNext(node) {
    this.next = node;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  addToEnd(node) {
    if (!this.head) {
      this.head = node;
      this.tail = node;
      return true;
    }
    this.tail.setNext(node);
    this.tail = node;
    this.size += 1;
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
      node.setNext(this.head);
      this.head = node;
    }

    let prevNode = readNode(index - 1);

    if (prevNode === this.tail) {
      this.tail = node;
    }
    //if the user gives index 5, find the node at index 4, then find the next of 4 (5)
    let prevNext = prevNode.next();
    //this is node 5
    //1,2,3,4,5,6,7,8
    //4=prevNode, 5=prevNext
    //4.next(e)
    //1,2,3,4,e
    //e.next(prevNode)
    //1,2,3,4,e,5,6,7,8
    //1,2,3,4,e
    //this.tail is still 4

    prevNode.setNext(node);
    node.setNext(prevNext);
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
      console.log(currentNode);

      currentNode = currentNode.next();
    }
    return currentNode;
  }
}
