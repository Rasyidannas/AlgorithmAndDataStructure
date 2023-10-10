//Bubble Sort is a sorting algorithm where the largest values bubble up to the top!
function bubbleSort(arr) {
  let noSwaps;//this set for SWAP

  //this looping reverse because largest value done first and in last element
  for (let i = arr.length; i > 0; i--) {
    noSwaps = true;
    for (let j = 0; j < i - 1; j++) {
      console.log(arr, arr[j], arr[j + 1]);
      if (arr[j] > arr[j + 1]) {
        //SWAP!
        let temp = arr[j]; //this for save temporary
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        noSwaps = false;//this will set noSwap to false if arr[j] > arr[j + 1]
      }
    }
    if (noSwaps) break;
  }
  return arr;
}

console.log(bubbleSort([1, 17, 6, 40, 2]));
console.log(bubbleSort([8, 3, 4, 5, 6]));
