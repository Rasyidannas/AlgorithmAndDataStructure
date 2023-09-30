//this is factorial without recrusive
function factorial(num) {
  let total = 1;
  for (let i = num; i > 1; i--) {
    total *= i;
  }

  return total;
}

console.log(factorial(4));

//this is factorial with recrusive
function factorialRecrusive(num) {
  //this is base case
  if (num === 1) return 1;
  return num * factorialRecrusive(num - 1);
}

console.log(factorialRecrusive(4))