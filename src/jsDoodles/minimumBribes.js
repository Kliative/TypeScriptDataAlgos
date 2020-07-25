/**
 * Time Complexity 0(n ^ 2)
 * Space complexity 0(1)
 * @param {Array} q 
 */
function minimumBribesN2(q) {
    // setup counter
    let count = 0;

    // loop throiugh array 
    for (let i = 0; i < q.length; i++) {
        //asign current elemeent to num
        // setup a counter for each loop in diff
        let num = q[i],
            diff = 0;

        // loop through array again but for each element 
        // start from the next element in array 
        for (let k = i + 1; k < q.length; k++) {
            // if current is greater there will be a swpa neede
            // incremenet counter
            if (num > q[k]) {
                diff++;
            }
        }

        // if the diff is greater than 2 return
        // 'Too chaotic'
        if (diff > 2) {
            return 'Too chaotic'
        }
        // add them all up 
        count += diff;
    }

    return count;

}

const minimumBribes = (q) => {
    let count = 0;

    //missing numbers of max two values [a,b]
    let missingNums = [];

    // loop through array 
    for (let i = 0; i < q.length; i++) {

        //set current element adn position 
        const currEl = q[i];
        const index = i + 1;

        // get the difference between the current element and its postion
        const diff = currEl - index;

        // greater than 2 positins = to chaotic
        // this is one the constraints
        if (diff > 2) {
            return 'To chaotic';
        }

        // checks if current element is currently in the
        // missing persons array
        let removeIndex = null;
        missingNums.forEach((num, missingIndex) => {
            if (currEl === num) {
                // if then assign its index to removeIndex
                removeIndex = missingIndex;
            }
        })


        if (removeIndex !== null) {
            // if the persons is in the missing person array remove it.
            // Splice (index of item, home many must be removed from that index)
            missingNums.splice(removeIndex, 1);
        }

        // now loop forward either 1 or 2 times to find its correct position

        for (let k = 0; k < diff; k++) {
            // make sure we are only adding the 2 positions that must be bribed to move ahead
            // any more then its 'To chaotic'
            if (missingNums.length < 2) {
                const missingNum = index + k;
                let isFoundedBehind = false;

                // loop back 2 places to make sure 
                // bribe has not take place before
                for (let b = i - 1; b > i - 3; b--) {
                    if (q[b] === missingNum) {
                        isFoundedBehind = true;
                        break;
                    }

                }
                // if a new bribe 
                if (!isFoundedBehind) {
                    //push the number to the missing person array
                    missingNums.push(missingNum);
                }

            }

        }

        // finally count the amount of missing person found in each bribe cycle
        missingNums.forEach((num, missingIndex) => {
            if (currEl > num) {
                count++;
            }
        });

    }
    return count;
}

console.warn('------------minimumBribesN2---------------');
console.warn(minimumBribesN2([2, 1, 5, 3, 4])); // 3
console.warn(minimumBribesN2([2, 5, 1, 3, 4])); // Chaos
console.warn(minimumBribesN2([1, 2, 5, 3, 7, 8, 6, 4])); // 7
console.warn(minimumBribesN2([5, 1, 2, 3, 7, 8, 6, 4])); // Chaos
console.warn('---------------------------');
console.warn(minimumBribes([2, 1, 5, 3, 4])); // 3
console.warn(minimumBribes([2, 5, 1, 3, 4])); // Chaos
console.warn(minimumBribes([1, 2, 5, 3, 7, 8, 6, 4])); // 7
console.warn(minimumBribes([5, 1, 2, 3, 7, 8, 6, 4])); // Chaos
