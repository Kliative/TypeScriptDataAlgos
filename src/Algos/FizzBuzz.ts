export default class FizzBuzz {
    /**
      * Fizzbuzz
      * @param {number} num
      * @returns {number | string}
      */
    static fizzbuzz = (num: number): number | string => {
        var returnVal: string | number = 0;
        for (let i = 1; i <= num; i++) {
            // i % 3 === 0 && i % 5 === 0
            if (i % 15 === 0) {
                returnVal = 'fizzbuzz';
            } else if (i % 3 === 0) {
                returnVal = 'fizz';
            } else if (i % 5 === 0) {
                returnVal = 'buzz';
            } else {
                returnVal = i;
            }

        }
        return returnVal;
    }

}
