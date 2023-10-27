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
    results.push(arr1[j]);
    j++;
  }

  return results;
}

console.log(merge([4, 5, 9], [1, 3]));
