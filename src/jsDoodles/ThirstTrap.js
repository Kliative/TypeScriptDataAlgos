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



ThirstTrap = (heights) => {
    let minR = 0;
    let minL = 0;

    let midPoint = Math.floor(heights.length / 2);
    let firstArr = heights.slice(0, midPoint);
    let secondArr = heights.slice(midPoint, heights.length);

    let remain = 0;

    for (let i = 0; i < firstArr.length; i++) {

        if (minL < firstArr[i]) {
            minL = firstArr[i];
        }
    }

    for (let i = 0, j = heights.length - 1; i < heights.length, j >= 0; i++, j--) {

        console.warn(`${i} + ${j}`);

    }

    for (let j = secondArr.length-1; j >= 0; j--) {
        if (minR < secondArr[j]) {
            minR = secondArr[j];
        }

    }

    let minOfTwo = Math.min(minL, minR);
    for (let f = 1; f < heights.length - 1; f++) {

        remain += minOfTwo - heights[f];

    }


    return ' minL = ' + minL + ', minR = ' + minR + ', firstArr = [' + firstArr + '], secondArr = [' + secondArr + '] ---- minOfTwo = ' + minOfTwo + ' ----- heights' + remain;

}


console.warn(ThirstTrap([15,0,6,10,11,2,5]));
// [1, 0, 2, 1, 0, 1][3, 2, 1, 2, 1]
// [1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]
// [2, 0, 1, 2, 1, 0]
// [0, 2, 1, 0, 1, 3, 2, 1, 2]
WetTrap = (height) => {
    const n = height.length;

    const leftHeightCompareArr = [];
    const rightHeightCompareArr = [];

    let leftMax = 0;
    let rightMax = 0;

    for (let i = 0; i < height.length; i++) {
        // Scan from left
        leftHeightCompareArr[i] = leftMax;
        console.warn(leftMax);
        console.warn(i+ '---L-');
        leftMax = Math.max(leftMax, height[i]);
        console.warn(leftMax);
    }

    console.warn( height.length - 1);
    
    for (let j = height.length - 1; j >= 0; j--) {
        // Scan from right
        rightHeightCompareArr[j] = rightMax;
        console.warn(rightMax);
        console.warn(j + '---R-');
        rightMax = Math.max(rightMax, height[j]);
        console.warn(rightMax);
    }

    console.warn('lm ' + leftMax);
    console.warn('rm ' + rightMax);

    console.warn('l ' + leftHeightCompareArr);
    console.warn('r ' + rightHeightCompareArr);

    console.warn('r0 ' + rightHeightCompareArr[0]);
    let total = 0;
    for (let i = 0; i < height.length; i++) {

  
        
        let water = Math.min(leftHeightCompareArr[i], rightHeightCompareArr[i]) - height[i];
        console.warn(leftHeightCompareArr[i], rightHeightCompareArr[i], height[i],water);
        total += water > 0 ? water : 0;
    }


    return total;

}

console.warn(WetTrap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]));