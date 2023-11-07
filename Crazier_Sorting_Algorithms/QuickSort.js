// Qucik sort is selecting one element (pivot) and finding the index where the pivot should end up in the sorted array. Once the pivot is positioned appropriately, quick sort can be applied on etiher side of the pivot.
function pivot(arr, start = 0, end = arr.length + 1) {
  //this is for change or switch position array element
  function swap(array, i, j) {
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }

  var pivot = arr[start];
  var swapIdx = start;

  for (var i = start + 1; i < arr.length; i++) {
    if (pivot > arr[i]) {
      swapIdx++;
      swap(arr, swapIdx, i);
    }
  }
  //this will replace pivot in swapIdx(last element less than pivot value)
  swap(arr, start, swapIdx);
  // console.log(arr);
  return swapIdx;
}

console.log(pivot([4, 8, 2, 1, 5, 7, 6, 3]));
