//Radix sort is a special sorting algorithm that work on lists of numbers. It never make compasrisons between elements because it exploits the fact that information about the size of number is encoded in the number of digits.

//this is function for get digit (0 from back/end number)
function getDigit(num, i) {
  return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}

//this is function for get digit
function digitCount(num) {
  //this is for avoid return infinity
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}

//this is function for get most/max/highest digit
function mostDigits(nums) {
  let maxDigits = 0;
  for (let i = 0; i < nums.length; i++) {
    maxDigits = Math.max(maxDigits, digitCount(nums[i]));
  }

  return maxDigits;
}

//this is real Radix sort and need function above (helper function)
function radixSort(nums) {
  let maxDigitsCount = mostDigits(nums);
  for (let k = 0; k < maxDigitsCount; k++) {
    //this will create 10 array nested array
    let digitBuckets = Array.from({ length: 10 }, () => []);

    //this loop nums array and get one element
    for (let i = 0; i < nums.length; i++) {
      //this will store in digitBucket index
      let digit = getDigit(nums[i], k);
      digitBuckets[digit].push(nums[i]);
    }
    // console.log(digitBuckets);

    //this is for reassign new nums ([]) and merge with concat()
    nums = [].concat(...digitBuckets);
    // console.log(nums);
  }

  return nums;
}

console.log(radixSort([23, 345, 5476, 12, 2345, 9852]));
