//Recrusion is a process(a function in our case) that calls itself until base case(the condition when the recrusion ends)

function sumRange(num) {
    //this is base case
    if(num === 1) return 1;
    return num + sumRange(num - 1);
}

console.log(sumRange(4));