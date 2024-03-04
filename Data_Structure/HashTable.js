//Hash Table is a data structure that implements an associative array abstract data type, a structure that can map key to value and the keys are not orderred. Benefit of Hash Tables are fast for all of the following operations: finding, adding, and removing values.

//hash function is convert keys into valid array indices
class HashTable {
  constructor(size = 4) {
    this.keyMap = new Array(size);
  }

  _hash(key) {
    let total = 0;
    let WEIRD_PRIME = 31; //this is help full in spreading out key s more uniformly
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      //Math.min() will give limit if key.length more than 100
      let char = key[i];
      //96 is from 'a' is 97 - 96 = 1, 'b' is 98 - 96 = 2, 'c' is 99 - 96 = 3
      let value = char.charCodeAt(0) - 96;
      total = (total * WEIRD_PRIME + value) % this.keyMap.length;
    }

    return total;
  }

  set(key, value) {
    let index = this._hash(key);
    //this for if index in array empty/didn't fill this will make empty array or wrapper in array
    if (!this.keyMap[index]) {
      this.keyMap[index] = [];
    }

    //this for filled array and Separate chaining when index filled and then make this nested array
    this.keyMap[index].push([key, value]);
  }
}

let ht = new HashTable();
console.log(ht.set("hello world", "goodbye!!"));
console.log(ht.set("cats", "are fine"));
console.log(ht.set("i love", "nasi goreng"));
console.log(ht);
