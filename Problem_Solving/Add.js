function charCount(str) {
    //make object to return at end
    let obj = {};

    //loop over string, for each characters
    for(let char of str) {
        char = char.toLowerCase();
        //if alphabets/numbers
        if(/[a-z0-9]/.test(char)){
            //if the char is a key in object, add one to count
            obj[char] = ++obj[char] || 1;//this is for obj[char] is truth it will do ++objchar and for falsy 1 
        }
    }
        //if char is something else (space, period, etc.) don't do anything 
    // return object at end
    return obj;
}

console.log(charCount('hello'))//output {h:1, e:1, l:2, o:1}
console.log(charCount('Hey, mate!'))