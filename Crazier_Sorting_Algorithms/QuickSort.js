// Qucik sort is selecting one element (pivot) and finding the index where the pivot should end up in the sorted array. Once the pivot is positioned appropriately, quick sort can be applied on etiher side of the pivot.

// this is for pivot (manage and sort element array)
function pivot(arr, start = 0, end = arr.length - 1) {
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

//this is resal Quick Sort
function quickSort(arr, left = 0, right = arr.length - 1) {
  //base case this because left and right always changing in recrusive
  if (left < right) {
    //this will call pivot function in above
    let pivotIndex = pivot(arr, left, right); //output 3

    //this is using recrusive
    //for left side
    quickSort(arr, left, pivotIndex - 1);

    //for right side
    quickSort(arr, pivotIndex + 1, right);
  }

  return arr;
}

console.log(quickSort([4, 8, 2, 1, 5, 7, 6, 3]));
