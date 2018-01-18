let node = require("./LinkedList").Node;
let LinkedList = require("./LinkedList").LinkedList;

class HashTable {
  constructor() {
    this.table = new Array(26);
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
    let node = new Node({ word: word, definition: null });
    let list = this.table[idx];
    list.addToEnd(node);
  }

  renderList() {}
}
