# Trapping Rain Water a.k.a ThirstTrap

Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it is able to trap after raining.

For example,
Given [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1], return 6.

![rainwatertrap](https://user-images.githubusercontent.com/565300/36057813-8a5c75a2-0dc8-11e8-8870-c9b965a9ccac.png)

The above elevation map is represented by array [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]. In this case, 6 units of rain water (blue section) are being trapped.

## While loop, fast runtime and lower memory complexity

This solution is different in the way that it doesn't require 3 loops but instead loops twice correct what it thought on the second right pass

```typescript
/**
*
* Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it is able to trap after raining.
* @AlgoType Divided and Conquer Algorithm
*
* Approach
* 1. Find highest points on left and right side
* 2. Find the smaller of the two highest at each index
* 3. The difference between the smaller height and the current element height will give you the water stored
*/

export default class WaterTrapWhile {

    static ThirstTrap = (elevations: number[]): number => {
        // Setup variables

        // PeakIdx is the poisiton of cureent Max height
        let peakIdx = 0,

            // i is the iteratiion count/er
            i = 0,
            // Current peak
            peak = 0,
            // Amount of water collected at that point
            volume = 0,
            // Totale water collected
            total = 0,
            // Max Height position
            MAX_IDX = 0;


        // The depth function expression calculates
        // takes in the interation count and the current elevation
        const depth = (i: number, elevation = elevations[i]) => {
            // if the elevatipon is greater than the peak
            if (elevation >= peak) {
                //assigne new peak
                peak = elevation;
                // telll us where that peak is in the array
                peakIdx = i;
                // add the current volume to the total
                total += volume;
                // reset volume for next position
                volume = 0;
            } else {
                // if the peak is bigger than the elevation
                // add the sum of the current volume to the subtration of peak - elevaltion the the volume.
                // dont reset
                volume += peak - elevation
            }
        }
        // loop from left
        // this will essentitially loop form the left as before but instead
        // of just collecting the array, the depth function calculautes the peak to check against
        // form a left perspective and what volume is at the position
        while (i < elevations.length) {
            depth(i++)
        }

        // Once this is done it sets up or right side loop
        // by assigning peakIdx to MAX_IDX so that when we loop for the right
        // we are aware of the index of highest point from the left.
        MAX_IDX = peakIdx;
        // we reset our peak and volumes
        // to start the right loop fresh
        volume = peak = 0;

        // loop from right
        // This is decrements the iterator, which is now the length of the array, to the index of the highest point.
        // This essentitially only goes over what was wrongly calculated by th left when it crossed over to the right half
        // Preformoning the same depth function, collecting the volumes and adding the sum to the total
        while (i-- >= MAX_IDX) {
            depth(i)
        }

        // Voila!
        return total;
    }

}
```
