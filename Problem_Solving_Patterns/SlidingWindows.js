//Sliding Window is this pattern involves creating a window shich can either be an array or number from one position to another.

function maxSubarraySum(arr, num) {
    let maxSum = 0;
    let tempSum = 0;
    if(arr.length < num) return null;

    for(let i = 0; i < num; i++) {
        maxSum += arr[i];
    }

    tempSum = maxSum;

    for(let i = num; i < arr.length; i++) {
        tempSum = tempSum - arr[i - num] + arr[i];
        maxSum = Math.max(maxSum, tempSum);
    }
    return maxSum;
} 

console.log(maxSubarraySum([2, 6, 5, 3, 2, 4, 8, 9], 2))//17
console.log(maxSubarraySum([2], 2))//null