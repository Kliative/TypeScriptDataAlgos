function findNumbers(nums) {
    let i = 0,
    count = 0;
    while (i < nums.length) {
        if (nums[i].toString().length % 2 === 0) {
            count++;
        }
        i++;

    }
    return count;
    
};
findNumbers([12,345,2,6,7896]);
