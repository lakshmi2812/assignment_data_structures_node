let Node = require("./LinkedList").Node;
let LinkedList = require("./LinkedList").LinkedList;
const fs = require("fs");

class HashTable {
  constructor() {
    this.table = new Array(26);
    this.table.fill(undefined);
    //this.table = this.table.map(idx => new LinkedList());
  }

  hashFunction(key) {
    //String.fromCharCode('A'.charCodeAt() + i)
    let alphaObj = {};
    for (let i = 0; i < 26; i++) {
      alphaObj[String.fromCharCode("A".charCodeAt() + i)] = i;
    }
    let char = key[0].toUpperCase();
    return alphaObj[char];
  }

  insert(word) {
    let idx = this.hashFunction(word);
    if (!this.table[idx]) {
      this.table[idx] = new LinkedList();
    }
    let node = new Node({
      word: word,
      definition: `The definition of '${word}' is '${word}'.`
    });
    let list = this.table[idx];
    list.addToEnd(node);
  }

  renderList() {
    this.table.forEach((list, idx) => {
      if (!list) {
        console.log(`No words in this bucket, index ${idx}`);
      } else {
        console.log(`There are ${list.size} nodes in this list, index ${idx}`);

        let currentNode = list.head;
        while (currentNode) {
          console.log(`Word: ${currentNode.word}`);
          currentNode = currentNode.next;
        }
      }
    });
  }

  definition(word) {
    let idx = this.hashFunction(word);
    if (!this.table[idx]) {
      return `${word} is not defined`;
    }
    let steps = 1;
    let currentNode = this.table[idx].head;

    while (currentNode && currentNode.word !== word) {
      currentNode = currentNode.next;
      steps += 1;
    }

    console.log(`It took ${steps} to locate the word`);

    if (currentNode) {
      return currentNode.definition;
    }

    return `${word} is not defined`;
  }
}

let hash = new HashTable();

hash.insert("bird");
hash.insert("cat");
hash.insert("dat");
hash.insert("pop");
hash.insert("huge");
hash.insert("tiny");
hash.insert("board");
hash.insert("BARTMAN");

console.log(hash.definition("board"));
console.log(hash.definition("barn"));

//word

let words = fs.readFileSync("./words.txt", "utf8");
words = words.split("\n");
