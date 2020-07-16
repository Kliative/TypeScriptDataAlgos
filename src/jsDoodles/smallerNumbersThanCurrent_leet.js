function smallerNumbersThanCurrent(nums) {

    let total = 0,
    ret = [];

    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < nums.length; j++){

            if (nums[i] > nums[j] && nums[i] != nums[j]) {
                total++;
            }
        }
        ret[i] = total;
        total = 0;
    }
    return ret;

};

console.warn(smallerNumbersThanCurrent([8, 1, 2, 2, 3]));
