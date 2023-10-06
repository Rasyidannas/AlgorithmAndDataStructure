//Linear Search is Given an array, the simplest way to search for an value is to look at every element in the array and check if it's the value we want.

function linearSearch(arr, val) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === val) {
      return i;
    }
  }
  return -1;
}

console.log(linearSearch([34, 56, 1, 2], 1)); //2
console.log(linearSearch([34, 56, 1, 2], 20)); //-1
