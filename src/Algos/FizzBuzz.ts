/**
  * JS used
  * @opertator % Modulous operator return the remaineder of the 2 numbers being assessed
  * @function (for...in) loops over Arrays
  */

export default class FizzBuzz {
    /**
      * Fizzbuzz
      * @param {number} num
      * @returns {number | string}
      */
    static fizzbuzz = (num: number): number | string => {

        // set types to accept only string or numbers assign to 0
        let returnVal: string | number = 0;


        for (let i = 1; i <= num; i++) {
            // checks the remaineder to axxert if number ifs divisible by 5 of 3
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
