// Merge Sort is a combination of two things merging and sorting.

//Example for merging arrays implementation
function merge(arr1, arr2) {
  let results = [];
  let i = 0;
  let j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      results.push(arr1[i]);
      i++;
    } else {
      results.push(arr2[j]);
      j++;
    }
  }

  //   this is for rest element in arr1
  while (i < arr1.length) {
    results.push(arr1[i]);
    i++;
  }

  //   this is for rest element in arr2
  while (j < arr2.length) {
    results.push(arr2[j]);
    j++;
  }

  return results;
}

console.log(merge([4, 5, 2], [1, 3, 9]));
console.log(merge([4, 5], [1, 3, 9]));

//this is real MergeSort but need merge function
function mergeSort(arr) {
  // this is base case
  if (arr.length <= 1) return arr;

  let mid = Math.floor(arr.length / 2);
  //this is using recrusive
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));

  return merge(left, right);
}

console.log(mergeSort([10, 24, 76, 73, 72, 1, 9]));
