
/**
 *  ORIGINAL ATTEMPT, SHOULD HAVE MOVED LAST IF INSIDE SECOND IF 
 *  AND MADE THE FIRST AND SECOND AN IF ELSE IF 
 * 
 * const valleyCount = (n, s) => {
    let pathArr = s.split('');
    depthCount = 0,
        valleyPoint = -1,
        i = 0;

    while (i < n) {



        if (pathArr[i] === 'D') {
            depthCount++;
        }
        if (pathArr[i] === 'U') {
            depthCount--;
        }

        if (i > 0 && depthCount === 0) {
            valleyPoint++;
        }


        i++;
    }

    return valleyPoint;
}
 
 */

/**
 * Simply adds 1 if the runing is acending and removes 1 (-1) if they are decending
 * when ever the counter hits 0  after having ascended 
 * it means we have exited a valley and should increas the valeey counter buy 1
 * @param {number} n 
 * @param {string} s 
 */

const valleyCount = (n, s) => {
    let valleyPoint = 0,
        depthCount = 0,
        i = 0;

    while (i < n) {



        if (s[i] === 'D') {
            depthCount++;


        } else if (s[i] === 'U') {
            depthCount--;
            if (depthCount === 0) {
                valleyPoint++;
            }
        }




        i++;
    }

    return valleyPoint;
}

// expected 1
console.warn(valleyCount(8, 'UDDDUDUU'));

// expected 1
console.warn(valleyCount(10, 'DDUDDUUDUU'));

// expectd 10
console.warn(valleyCount(1000, 'DUDUUDUUUUUUDDDDDUDDUUUDUUUDDDUUUDDUDDDDUDDDDDUUDUDUDUDDDDUUDDUDDUUUUDDUUUUDUUDUUDUUUUDDDUDDUUUUDUDDDUUDUDUUDDUUUDUDDDUDUDUDUDUUUDUUUUUUDUDDDDDUDUDDDDUUUUUDUDUUUUUUUUDDDUUDUUDUDUDDDDDUDDDUDUUUDUDDDUDUUDUUDDDDDDDUDUDUUUDUDDUDUUDUDDDUUUDUDDDDUDDUDDUDUDUUDUDDDUDUUUDUUDUUUUUUUDUUUUUUUDDDDDUDDDUUUDDDUDDDUDDUUDDUUUDUUDDDUDUUDUUUDDUDDDDUUUUUUDUDUUDDDDUDUDDUUUDUDUUDDUUDDDUUDUUUUUDDUUDDDDUUUDUDUUDDUUDDUUDUDDDUDUDUDDUUDUDDUDUDDUUUDUDDUDDUUDUUDUDDDDDDDDDUDDUUDDUUUUDDUDUUDUUDUUDDDDUUUDUDDDDUDDUUDUDUDUUDDUUDUDUDDDDDUUUDDDDUDDDUUDDUUDDUUUDUDDDUDDDDDUUDUUUDDUDDDDUUUDDDDUUDDUUUDUUUDDUDUUUDUDDUUUDDDDDDDUUDDUDDUUUUUUDDDDUDDUDDUDDUDDDDDUUDDUDDDUDDUDUDDDUDUDUUDDUUDDDDUUDDUUUDUUDDDDDDUDUDDUDUUDDUDDDUUUUDDUUDUDDDDUUUDUUUUDDUDUUUDDUDUUUUUUDUUDDDDDUDDUDUDDDUDDDDUDUUUDUDUUDDUDDDUDUUDDDDDDDDUDUUDUDDUDDUDUUUDDDUDUDDUUUDUDUDDDUDDUDUUUDUDDDDDUDDDDDDUDUUUUDDUDDDUDDDUDUDUUUDDUDDUDDUUDDUDUDUDUUUUUDUUDDUUDUUDUUUDUDUDDUDDDUUDDDDUUDDUUUUDUUDUUUDDDDDUDDDDDUUUDDUUUDUUUDUUDUUUDUDUUDUDDUUUUUDUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUU')); // expected 1