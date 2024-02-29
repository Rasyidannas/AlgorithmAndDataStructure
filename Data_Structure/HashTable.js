//Hash Table is a data structure that implements an associative array abstract data type, a structure that can map key to value and the keys are not orderred. Benefit of Hash Tables are fast for all of the following operations: finding, adding, and removing values.

//hash function is convert keys into valid array indices
function hash(key, arrayLen) {
  let total = 0;
  for (let char of key) {
    //96 is from 'a' is 97 - 96 = 1, 'b' is 98 - 96 = 2, 'c' is 99 - 96 = 3
    let value = char.charCodeAt(0) - 96;
    total = (total + value) % arrayLen;
  }

  return total;
}
