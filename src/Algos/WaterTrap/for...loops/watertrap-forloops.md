# Trapping Rain Water a.k.a ThirstTrap

Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it is able to trap after raining.

For example,
Given [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1], return 6.

![rainwatertrap](https://user-images.githubusercontent.com/565300/36057813-8a5c75a2-0dc8-11e8-8870-c9b965a9ccac.png)

The above elevation map is represented by array [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]. In this case, 6 units of rain water (blue section) are being trapped.

I have written an article where I go into more detail about the solution

`https://medium.com/@Klish3/trapping-rain-algorithm-typescript-8eef3f69a4dd`

```typescript
/**
* 
* Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it is able to trap after raining.
* @AlgoType Divided and Conquer Algorithm
* 
* Approach
* 1. Find heights points on left and right side
* 2. Find the smaller of the two heights at each index
* 3. The difference between the smaller height and the current element height will give you the water stored
*/

export default class WaterTrap {

    static ThirstTrap = (heights: number[]): number => {
        const heightsLength = heights.length;

        // Setup 2 Array to hold the heighst value at the give index of the each index
        // form the left side of the array and from the right side
        const leftHeightCompareArr = [];
        const rightHeightCompareArr = [];

        // Holds the value of the hieghts point 
        let leftMax = 0;
        let rightMax = 0;

        //  traverse through the array from the left starting at 0
        for (let i = 0; i < heightsLength; i++) {
            // Scan from left
            // make the value at index i in leftHeightCompareArr[] = to leftMax
            // which initially will be th 0
            leftHeightCompareArr[i] = leftMax;
            // set leftMax to the value returned from the max height 
            // between rightMax (initailly 0) and the height at index j
            leftMax = Math.max(leftMax, heights[i]);

        }

        //  traverse through the array from the right starting at heights.index - 1
        for (let j = heightsLength - 1; j >= 0; j--) {
            // Scan from right
            // make the value at index i in rightHeightCompareArr[] = to rightMax
            // which initially will be heights.length -1 
            rightHeightCompareArr[j] = rightMax;
            // set rightMax to the value returned from the max height 
            // between rightMax (initailly 0) and the height at index j
            rightMax = Math.max(rightMax, heights[j]);
        }
        
        // now that we have 2 arrays of the heighest pionts at those indexes 
        // from the left perscpective and the right perscpective

        // setup a number variable set to 0 to add all the left over water
        let total = 0;
        for (let i = 0; i < heightsLength; i++) {

            // return the smaller of the 2 heights bewteen the leftHeightCompareArr and rightHeightCompareArr index i 
            // and minus the height at index i, to get the water colelcted that point
            let water = Math.min(leftHeightCompareArr[i], rightHeightCompareArr[i]) - heights[i];

            // if the number is positive
            // add it to them together for total water
            // else add 0 to the total number
            total += water > 0 ? water : 0;
        }


        return total;

    }


}
```