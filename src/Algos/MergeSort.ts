/**
 * 
 * Merg sort is a divide and conquer algorithm
 * It deivides input single array into two halves
 * calls itself fo the two halves
 * an then merges the two sorted array
 * 
 * JS used
 * @function Math.floor() returns the largest integer less than or equal to a given number
 * @function Array.slice() returns  an array from start slice('param'...) to end slice('param','param2') where start and end represent the index of items in that array
 * @function Array.shift() adds value to array at the end of the arrar [...,'value']
 * @function (for...in) loops over Arrays
 */

export default class MergeSort {

    // split array of ~ same length
    static mergeSort = (numArr: number[]):number[] => {

        // if array has less than 3 values return array
        if (numArr.length < 2) {
            return numArr;
        }
    // find middel of array
        let midIndex = Math.floor(numArr.length / 2);
        // seperate first half
        let firstHalf = numArr.slice(0, midIndex);
        // seperate second half
        let secondHalve = numArr.slice(midIndex);

        firstHalf = MergeSort.mergeSort(firstHalf);
        secondHalve = MergeSort.mergeSort(secondHalve);
        return MergeSort.merge(firstHalf,secondHalve )
    }

    static merge = (numArr1: number[], numArr2: number[]): number[] => {
        let result: any[] = [];
        // run while numArr1 & numArr2 have values 
        while (numArr1.length && numArr2.length) {
            let minElem: number | undefined;
            //  check the first value of Array1 is smaller than the first vaule of Array2
            if (numArr1[0] < numArr2[0]) {
                minElem = numArr1.shift();
            } else {
                minElem = numArr2.shift()
            }
            result.push(minElem);
        }
        // stores remaning values into the resuls array and reassignes itself
        if (numArr1.length) {
            result = result.concat(numArr1);
        } else {
            result = result.concat(numArr2);
        }

        const filteredResult = result.filter(function (el) {
            return el != null || undefined;
        });
        return filteredResult;
    }
}

