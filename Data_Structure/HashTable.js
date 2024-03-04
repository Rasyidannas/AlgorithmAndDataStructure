//Hash Table is a data structure that implements an associative array abstract data type, a structure that can map key to value and the keys are not orderred. Benefit of Hash Tables are fast for all of the following operations: finding, adding, and removing values.

//hash function is convert keys into valid array indices
class HashTable {
  constructor(size = 53) {
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

  //addding key and value to one array
  set(key, value) {
    let index = this._hash(key);
    //this for if index in array empty/didn't fill this will make empty array or wrapper in array
    if (!this.keyMap[index]) {
      this.keyMap[index] = [];
    }

    //this for filled array and Separate chaining when index filled and then make this nested array
    this.keyMap[index].push([key, value]);
  }

  //print key and value in array
  get(key) {
    let index = this._hash(key);
    if (this.keyMap[index]) {
      for (let i = 0; i < this.keyMap[index].length; i++) {
        //this for check key in array nested same like key in argument
        if (this.keyMap[index][i][0] === key) {
          return this.keyMap[index][i];
        }
      }
    }

    return undefined;
  }

  //print all values
  values() {
    let valuesArr = [];
    for (let i = 0; i < this.keyMap.length; i++) {
      //sheck only filled array
      if (this.keyMap[i]) {
        for (let j = 0; j < this.keyMap[i].length; j++) {
          //check dupliacate or similar values
          if (!valuesArr.includes(this.keyMap[i][j][1])) {
            valuesArr.push(this.keyMap[i][j][1]);
          }
        }
      }
    }

    return valuesArr;
  }

  //print all keys
  keys() {
    let keysArr = [];
    for (let i = 0; i < this.keyMap.length; i++) {
      //sheck only filled array
      if (this.keyMap[i]) {
        for (let j = 0; j < this.keyMap[i].length; j++) {
          //check dupliacate or similar keys
          if (!keysArr.includes(this.keyMap[i][j][0])) {
            keysArr.push(this.keyMap[i][j][0]);
          }
        }
      }
    }

    return keysArr;
  }
}

let ht = new HashTable(17);
ht.set("maroon", "#800000");
ht.set("yellow", "#FFFF00");
ht.set("olive", "#808000");
ht.set("salmon", "#FA8072");
ht.set("lightcoral", "#F08000");
ht.set("plum", "#DDA0DD");
ht.set("plum", "DOUBLE");
ht.set("purple", "#DDA0DD");
ht.set("violet", "#DDA0DD");
console.log(ht);
// console.log(ht.get("maroon"));
// console.log(ht.get("salmon"));
console.log(ht.values());
console.log(ht.keys());
