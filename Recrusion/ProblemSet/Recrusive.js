function reverse(str) {
  //base case
  if (str.length <= 1) return str;
  return reverse(str.slice(1)) + str[0];
}

console.log(reverse("eye"));
console.log(reverse("car"));
