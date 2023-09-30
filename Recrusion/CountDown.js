//Recrusion is a process(a function in our case) that calls itself until base case(the condition when the recrusion ends)

function coutnDown(num) {
    //this is base case
    if(num <= 0) {
        console.log("All done!");
        return
    }

    console.log(num);
    num--;
    //this is a recrusions
    coutnDown(num);
}

coutnDown(5);