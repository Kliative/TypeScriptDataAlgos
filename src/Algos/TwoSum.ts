/**
  * JS used
  * @function indexOf('param') checks if parmaater passed is insdie array and returns it, else returns -1 
  * @function (for...in) loops over Arrays
  */


export default class TwoSum {
    /**
      * TwoSum should return and array of number arrays that return holds the two number used to make the sum
      * @param {number[]} numArray
      * @param {number} sum
      * @returns {number[][]}
      */
    static twoSum = (numArray: number[], sum: number): number[][] => {
        let pairs = [];
        let hashtable = [];

        // loop over number Array and assign 
        for (let i in numArray) {
            const currNum = numArray[i];

            // counterpart is the sum param minus the current number in loop
            let counterpart = sum - currNum;


            // If counterpart exist in the hashtable, 
            // then we know we already iterated through that number in our array 

            if (hashtable.indexOf(counterpart) !== -1) {
                //push counterpart + current number
                pairs.push([currNum, counterpart])
            }
            // push current number
            hashtable.push(currNum);
        }

        return pairs;
    }
}