//Naive String Search is suppose you want to count the number of times a smaller string appears in a longer string. A straightforward approach involves checking pairs of characters indvidually.

function naiveSearch(long, short) {
  let count = 0;
  for (let i = 0; i < long.length; i++) {
    for (let j = 0; j < short.length; j++) {
      if (short[j] !== long[i + j]) {
        // console.log(long[i], short[j]);
        break; //this will break(stop while) loopng for j
      }
      if (j === short.length - 1) {
        count++;
      }
    }
  }
  return count;
}

console.log(naiveSearch("lorie loled", "lol"));//1
console.log(naiveSearch("cokies coki", "cok"));//2
console.log(naiveSearch("cokies coki", "ciko"));//0
