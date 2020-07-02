
/**
 * 
 * Selection sort is a divide and conquer algorithm
 * It deivides input single array into two halves
 * calls itself fo the two halves
 * an then merges the two sorted array
 * 
 * JS used
 * @function for standard for loop give acces to individual elements and the he ability to change the number of elements iterated over
 * @returns {number[]} sort array
 */


export class SelectionSort {

    static selectionSort = (numArr: number[]): number[] => {
        for (let i = 0; i < numArr.length; i++) {
            let indexOfMin = i;
            // arrays are offest by 1 becasue they start at 0
            // (i+1) represents the vaules in the array after the value being checked against
            for (let j = i+1; j < numArr.length; j++) {
                // if value arr[j] is greater than the value at arr[indexOfMin]
                // then we have foudn a lesser values position
                if (numArr[j] < numArr[indexOfMin]) {
                    indexOfMin = j;
                }
            }

            // Swap postions of values in numArr
            if (indexOfMin !== i) {
                // store lesser in temp variable
                let lesser = numArr[indexOfMin];
                // assign greater to the position where the lesser was
                numArr[indexOfMin] = numArr[i];
                // then assign the lesser to the position of the greater
                numArr[i] = lesser;
            }
        }
        // return sorted array
        return numArr;
    }
}