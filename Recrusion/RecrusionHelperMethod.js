function collectOdds(nums) {
  let result = [];

  //this is recrusive helper method
  function helper(helperInput) {
    if (helperInput.length === 0) {
      return;
    }

    if (helperInput[0] % 2 !== 0) {
      result.push(helperInput[0]);
    }

    helper(helperInput.slice(1));
  }

  helper(nums);

  return result;
}

console.log(collectOdds([1, 5, 4, 11, 90, 3]))
