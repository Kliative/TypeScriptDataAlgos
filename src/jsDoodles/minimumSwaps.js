
/**
 * Find the minimum number of swaps
 * @param {Array} arr 
 */
const minimumSwaps = (arr) => {

    // min swap counter
    let minSwapCount = 0;


    // Loop through array 
    for (let i = 0; i < arr.length; i++) {

        // swapsCounter() returns 1 if there is a swap 
        // add that to the minSwapCount
        minSwapCount += swapsCounter(arr, i);

    }
    // return the accumplated number of swaps
    return minSwapCount;
}

/**
 * This is a helper function that allows us to check and swap 
 * elements around whilst inside the for..loop upstairs
 * 
 * @param {Array} arr array 
 * @param {number} i iterator
 */
const swapsCounter = (arr, i) => {

    // setup swap counter 
    let swapsCount = 0,
        // current item in array 
        curNUm = arr[i],
        // target it for sway
        target = arr[curNUm - 1];

    // keep doing this operation
    // untill current number is not equal to the target
    while (curNUm !== target) {
        // set the element at arr[i] to the target number
        arr[i] = target;
        // then set the element at the position of the 
        // the position of current number - 1 in the original arr
        arr[curNUm - 1] = curNUm;

        // this is a swap so increment the counter by 1
        swapsCount++;

        // leave array manipulation and set variables

        // set the current number to the target
        curNUm = target;
        // set the target to the current number 
        target = arr[curNUm - 1];
    }
    // return swap count
    return swapsCount
}

console.warn(minimumSwaps([45, 46, 47, 48, 49, 50, 51]));