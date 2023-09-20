function charCount(str) {
    //make object to return at end
    let result = {};

    //loop over string, for each characters
    for(let i = 0; i < str.length; i++) {
        let char = str[i].toLowerCase();
        //if the char is a key in object, add one to count
        if(result[char] > 0) {
            result[char]++;
        } else {
            //if the char is not in object, add it and set value to 1
            result[char] = 1;
        }
    }
        //if char is something else (space, period, etc.) don't do anything 
    // return object at end
    return result;
}

console.log(charCount('hello'))//output {h:1, e:1, l:2, o:1}
console.log(charCount('Hey, mate!'))