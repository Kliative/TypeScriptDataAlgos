const twoSum = (numArray: number[], sum: number): number[][] => {
    let pairs = [];
    let hashtable = [];

    for (let i = 0; i < numArray.length; i++) {
        const currNum = numArray[i];

        let counterpart = sum - currNum;
        if (hashtable.indexOf(counterpart) !== -1) {
            pairs.push([currNum, counterpart])
        }
        hashtable.push(currNum);
    }

    return pairs;
}

export default twoSum;