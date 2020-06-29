
/**
 * 
 * Merg sort is a divide and conquer algorithm
 * It deivides input single array into two halves
 * calls itself fo the two halves
 * an then merges the two sorted array
 * 
 * JS used
 * @function for standard for loop give acces to individual elements and the he ability to change the number of elements iterated over
 * @returns {number[]} sort array
 */

 export class BubbleSort {
    static bubbleSort = (numArr: number[]): number[] => {

        for (let i = 0; i < numArr.length; i++) {

            // arrays are offest by 1 becasue they start at 0
            // (arr - i -1) makes ure we stay inside the bounds of the array
            for (let j = 0; j < (numArr.length - i - 1); j++) {

                // if value arr[j] is greater than the value at arr[j+1]
                // then we want to swap the two values
                if (numArr[j] > numArr[j + 1]) {

                    // store lesser in temp variable
                    const lesser = numArr[j + 1]
                    // assign greater to the position where the lesser was
                    numArr[j + 1] = numArr[j];
                    // then assign the lesser to the position of the greater
                    numArr[j] = lesser;
                }
            }
        }
        // return sorted array
        return numArr;
    }
}