function isPalindrom(str) {
  if (str.length === 1) return true;
  if (str.length === 2) return str[0] === str[1];
  if (str[0] === str.slice(-1)) return isPalindrom(str.slice(1, -1));

  return false;
}

console.log(isPalindrom("a"));
console.log(isPalindrom("eye"));
console.log(isPalindrom("car"));
console.log(isPalindrom("abba"));
