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

// console.log(getDigit(1234, 1))
console.log(digitCount(21388));
console.log(mostDigits([21388, 19, 234, 912, 12]));
