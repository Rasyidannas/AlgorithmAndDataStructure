//Binary Search is rather than eliminating one element at a time, you can eliminate half of the remaining elements at a time. This only work on sorted arrays!

function binarySearch(arr, elem) {
  let start = 0;
  let end = arr.length - 1;
  let middle = Math.floor((start + end) / 2);

  while (arr[middle] !== elem && start <= end) {//start <= end it is for stop if element not found
    if (elem < arr[middle]) end = middle - 1;
    else start = middle + 1;
    middle = Math.floor((start + end) / 2);
  }
//   console.log(start, middle, end);
  return arr[middle] === elem ? middle : -1;
}

console.log(binarySearch([2, 5, 6, 7, 9, 12, 17, 21], 5)); //1
console.log(binarySearch([2, 5, 6, 7, 9, 12, 17, 21], 15)); //-1