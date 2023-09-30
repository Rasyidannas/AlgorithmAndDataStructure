function collectOdds(arr) {
  let newArr = [];

  //this is base case
  if (arr.length === 0) return newArr;

  if (arr[0] % 2 !== 0) {
    newArr.push(arr[0]);
  }

  newArr = newArr.concat(collectOdds(arr.slice(1)));
  return newArr;
}

console.log(collectOdds([1, 4, 10, 14, 19, 17]));
