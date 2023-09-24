//Multiple Pointers is creating pointers or values that correspond to an index or position and move towards the beginning, end or middle based on a certain condition

function sumZero(arr) {//find sum zero in array
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    let sum = arr[left] + arr[right];
    if (sum === 0) {
      return [arr[left], arr[right]];
    } else if (sum > 0) {
      right--;
    } else {
      left++;
    }
  }
}

console.log(sumZero([-3, -2, -1, 0, 1, 2, 3])); //[-3, 3]
console.log(sumZero([-5, -2, -1, 0, 1, 2, 4, 5])); //[-5, 5]
console.log(sumZero([-3, -2, -1])); //undefined
