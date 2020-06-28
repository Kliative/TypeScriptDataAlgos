export default class Fibonnaci {


    /**
     * Palindrome
     * @param {string} str
     * @returns {Boolean}
     */

    static isPalindrome = (str: string): boolean => {

        let characterArr = str.toLowerCase().split('');
        let validCharacters = 'abcdefghijklmnopqrstuvwxyz'.split('');
        let lettersArr: string[] = [];

        /**
         * Checkis if the string characrter is a letter if true, then push to letters 
         *  @returns {string} lowercase string Array
         */

        characterArr.forEach(char => {
            if (validCharacters.indexOf(char) > -1) {
                lettersArr.push(char);
            }
        });

         /**
         * Compares string against itself in reverse
         * @returns {boolean}
         */
        if (lettersArr.join('') === lettersArr.reverse().join('')) {
            return true;
        } else {
            return false;
        }
    }
}

