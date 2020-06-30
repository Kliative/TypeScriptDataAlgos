/**
* 
* Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it is able to trap after raining.
* @AlgoType Devide and Conquour Algorithm
* 
* Approach
* 1. Find heights points on left and right side
* 2. Take the samller of the two as the cut off
* 3. The difference between the the smaller height and the current element hieght will give you the water stored
*/

export default class WaterTrap {

    static rainCollection = (height: number[]): number => {
        // collected water
        let result = 0;


        // loop through array and ignore the fist and last values; i=1 / eight.length - 1
        for (let i = 1; i < height.length - 1; i++) {

            // max hieghts
            let maxLeft = 0;
            let maxRight = 0;

            // Increment for left
            // find the maximum element on the left
            for (let j = i; j >= 0; j--) {
                maxLeft = Math.max(maxLeft, height[j]);
            }            
            
            // find the maximum element on the right
            for (let j = i; j < height.length; j++) {
                maxRight = Math.max(maxRight, height[j]);
            }
            
            // find the min of maxLeft and maxRight and minus the height at i 
            // add this value to the result which is 0
            result = result + Math.min(maxLeft, maxRight) - height[i];

        }
        return result;

    }
}



