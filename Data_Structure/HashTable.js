//Hash Table is a data structure that implements an associative array abstract data type, a structure that can map key to value and the keys are not orderred. Benefit of Hash Tables are fast for all of the following operations: finding, adding, and removing values.

//hash function is convert keys into valid array indices
function hash(key, arrayLen) {
  let total = 0;
  let WEIRD_PRIME = 31; //this is help full in spreading out key s more uniformly
  for (let i = 0; i < Math.min(key.length, 100); i++) {
    //Math.min() will give limit if key.length more than 100
    let char = key[i];
    //96 is from 'a' is 97 - 96 = 1, 'b' is 98 - 96 = 2, 'c' is 99 - 96 = 3
    let value = char.charCodeAt(0) - 96;
    total = (total * WEIRD_PRIME + value) % arrayLen;
  }

  return total;
}

console.log(hash("hello", 13));
console.log(hash("olleh", 13));
console.log(hash("car", 13));
console.log(hash("rac", 13));
console.log(hash("cyan", 13));
console.log(hash("pink", 13));
