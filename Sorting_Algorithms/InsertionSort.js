//Insertion Sort is builds up the sort by gradually creating a larger left half which is always sorted
function insertionSort(arr) {
  for (var i = 1; i < arr.length; i++) {
    var currentVal = arr[i];
    //this is for check before i
    for (var j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
        //SWAPPING
        arr[j + 1] = arr[j];
    }
    //SWAPPING and j in here after decrease in for loop above
    arr[j + 1] = currentVal;
  }
  return arr
}

console.log(insertionSort([2, 1, 5, 19, 8]))