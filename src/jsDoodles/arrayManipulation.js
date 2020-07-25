function arrayManipulation(n, queries) {
    // Alternative Arrya creation
    // const arr = '0'.repeat(n).split('').map((e) => parseInt(e));
    let zeroArr = '0'.repeat(n).split('').map((e) => parseInt(e));

    for (let j = 0; j < queries.length; j++) {
        let startIndex = queries[j][0];
        let endIndex = queries[j][1];
        let numberToAdd = queries[j][2];

        for (let i = 0; i < n; i++) {
            let index = i + 1;

            if (index >= startIndex && index <= endIndex) {
                zeroArr[i] += numberToAdd;
            }
        }
    }

    return Math.max(...zeroArr);
}
/**
 * This is the optimized solution.
 * 
 * @param {number} n 
 * @param {number[][]} queries 
 */
function arrayManipulationOptimzied(n, queries) {


    // create and array to the length n + 1 
    // Arrays start at 0 so the plus 1 give us the correct length of the array 
    const arr = Array(n + 1);


    // set up the counter variables and the maximum Value
    let maxValue = 0,
        currentNumber = 0;


    // first lopp iterates over the entire queries array
    // passing the arguments [startRange, endRange, value] = [1, 2, 100] for each iteration
    queries.forEach(([startRange, endRange, value]) => {

        // Assigned at the postion arr[startRange..] will either equal the int at 
        // that position or the object literal { start: 0, end: 0 }
        // the same is done at arr[endRange]
        arr[startRange] = arr[startRange] || { start: 0, end: 0 };
        arr[endRange] = arr[endRange] || { start: 0, end: 0 };

        // incremenr the values to those 2 positions 
        // the values at .start and .end of current object literal.
        arr[startRange].start += value;
        arr[endRange].end += value;
    });


    // now that we have the array of final values of each position
    // we will loop through that new array and check every position (perform opertaions)


    arr.forEach((cell) => {
        // if object/value exists
        if (cell) {
            // increase (sets since it is at 0) 
            // the currentNumber to the start of each position
            currentNumber += cell.start;

            // Then checks that value against the current maxValue
            if (currentNumber > maxValue) {
                // if great than current maxValue, reassign the max to the current number
                maxValue = currentNumber;
            }

            // remover the number just checked
            // so current number retunrs to 0 foir the next loop
            currentNumber -= cell.end;
        }
    });
    
    // at the end of it all we would have checked for the 
    // maxixum valeu agains each row, now taht we finally 
    // poses the maxValue for the entire array
    return maxValue;
}