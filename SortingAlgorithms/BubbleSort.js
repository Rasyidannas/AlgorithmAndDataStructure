//Bubble Sort is a sorting algorithm where the largest values bubble up to the top!
function bubbleSort(arr){
    //this looping reverse because largest value done first and in last element
    for(let i = arr.length; i > 0; i--) {
        for(let j = 0; j < i - 1; j++) {
            if (arr[j] > arr [j+1]) {
                //SWAP!
                let temp = arr[j];//this for save temporary
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
    return arr;
}

console.log(bubbleSort([1, 17, 6, 40, 2]))