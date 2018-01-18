class Queue {
  constructor(input = []) {
    this.array = input;
  }

  get() {
    return this.array;
  }

  empty() {
    return this.array.length === 0;
  }

  dequeue() {
    let dequeue = this.array[0];
    let returnArray = [];
    for (let i = 1; i < this.array.length; i++) {
      returnArray[i - 1] = this.array[i];
    }
    this.array = returnArray;
    return dequeue;
  }

  enqueue(input) {
    this.array[this.array.length] = input;
  }

  peek() {
    return this.array[0];
  }
}

let test = new Queue([1, 2, 3, 4]);
console.log(test.dequeue());
console.log(test.get());
test.enqueue(100);
console.log(test.get());
console.log("peek => ", test.peek());

let originalString = new Queue("string");
let reverseString = new Queue();

while (!originalString.empty()) {
  reverseString.enqueue(originalString.dequeue());
}

console.log(reverseString.get());
//Enqueue, Dequeue, peek, isEmpty
//FIFO
//get out from front
//get in from back

//start<--1--2--3--4-->end

//[{1,2,3,4}]
//dequeue
//[1,{2,3,4}]
//enqueue
//[1, {2,3,4,5}]
class Queue {
  constructor() {
    this.queue = [];
    this.start = -1;
    this.end = -1;
  }

  getQueue() {
    console.log("start:", this.start, "end: ", this.end);
    return this.queue;
  }

  isEmpty() {
    return this.start === this.end;
  }

  enqueue(el) {
    this.end += 1;
    this.queue[this.end] = el;
  }

  dequeue() {
    if (!this.isEmpty()) {
      let dequeued = this.queue[this.start + 1];
      this.start += 1;
      return dequeued;
    }
  }
}

//Testing

let str = "string";

let queue = new Queue();

for (let i = 0; i < str.length; i++) {
  queue.enqueue(str[i]);
}
console.log("initial string", queue.getQueue());

while (!queue.isEmpty()) {
  queue.dequeue();
}

console.log("final string", queue.getQueue());
