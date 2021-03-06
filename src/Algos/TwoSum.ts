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
  static twoSumArr = (numArray: number[], sum: number): number[][] => {
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

  /**
   * 
   * In this example we need to raturn one array of 2 indexes 
   * Given an array of integers, return an array containing the indices 
   * of the two numbers that add up to a specific target. It may be assumed 
   * that each input would have exactly one solution, and the same element 
   * may not be used twice. Lastly, the array cannot be sorted.
   * 
   * TIP:
   * 
   * In interview ask if the tartget is always going to be a number
   * 
   * DONT USE BRUTE FORCE 
   * 
   * @param nums In this 
   * @param target 
   */

  static twoSumSingle(nums: number[], target: number): any {

    let numsIndexes: any = {};

    for (let i = 0; i < nums.length; i += 1) {
      let currentDifference = target - nums[i];

      if (numsIndexes[currentDifference] !== undefined && numsIndexes[currentDifference] !== i) {
        // will return the first pair
        return [i, numsIndexes[currentDifference]];
      } else {
        numsIndexes[nums[i]] = i;
      }
    }
    return numsIndexes;
  }
}
