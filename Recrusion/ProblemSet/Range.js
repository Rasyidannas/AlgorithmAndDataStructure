function range(x) {
  if (x === 0) return 0;

  return x + range(x - 1);
}

console.log(range(4));//10
console.log(range(3));//6
