// Quick sort is selecting one element (pivot) and finding the index where the pivot should end up in the sorted array. Once the pivot is positioned appropriately, quick sort can be applied on etiher side of the pivot.

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

//this is real Quick Sort
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

// SIMPLE QUICK SORT
function simpleQuickSort(nums) {
  // base case, arrays of length 0 or 1 are sorted already
  if (nums.length <= 1) return nums;

  // last number is the pivot
  const pivot = nums[nums.length - 1];
  const left = [];
  const right = [];

  // sort all smaller numbers than the pivot into left
  // and all bigger numbers into right
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] < pivot) {
      left.push(nums[i]);
    } else {
      right.push(nums[i]);
    }
  }

  // call quick sort on left and right
  // concat all into one big array with pivot in the middle
  return [...quickSort(left), pivot, ...quickSort(right)];
  // the below is equivalent
  // return quickSort(left).concat(pivot, quickSort(right))
}
