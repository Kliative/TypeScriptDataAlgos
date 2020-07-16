/**
 * Creates hashtable then checks to see if the of the key of
 * hashtable returns 0 when modulesed against with a For...of
 * @param {number[]} arr 
 * @param {number} n 
 */

const sockCounterForOf = (arr, n) => {
    let sockCountObj = {},
        pairCount = 0;
    for (const i of arr) {
        if (sockCountObj[i]) {
            sockCountObj[i] += 1;
        } else {
            sockCountObj[i] = 1;
        }


        // 

        if (sockCountObj[i] % 2 === 0) {
            pairCount++;
        }
        // 
    }

    return pairCount;
}
/**
 * Creates hashtable then checks to see if the of the key of
 * hashtable returns 0 when modulesed against with a forEach Loop
 * @param {number[]} arr 
 * @param {number} n 
 */
const sockCounterForEach = (arr, n) => {

    let sockCountObj = {};
    let pairCount = 0;

    arr.forEach(i => {
        sockCountObj[i] = !sockCountObj[i] ? 1 : sockCountObj[i] += 1;

        if (sockCountObj[i] % 2 === 0) {
            pairCount++;
        }
    });
    return pairCount;
}


/**
 * Sorts the array and then compares elements side by side
 * @param {number[]} arr 
 * @param {number} n 
 */
const sockCounterSortCompare = (arr, n) => {

    let sortedArr = arr.sort((a, b) => a - b);
    let pairCount = i = 0;

    while (i < n - 1) {
        if (sortedArr[i] === sortedArr[i + 1]) {
            pairCount++;
            i += 1;
        }
        i++;
    }
    return pairCount;
}
console.warn(sockCounterForOf([10, 20, 20, 10, 10, 30, 50, 10, 20], 9));
console.warn(sockCounterForEach([10, 20, 20, 10, 10, 30, 50, 10, 20], 9));
console.warn(sockCounterSortCompare([10, 20, 20, 10, 10, 30, 50, 10, 20], 9));