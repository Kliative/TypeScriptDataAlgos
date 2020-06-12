const isPalindrome = (str: string): boolean => {
    str = str.toLowerCase();
    let characterArr = str.split('');
    let validCharacters = 'abcdefghijklmnopqrstuvwxyz'.split('');

    let lettersArr: string[] = [];
    characterArr.forEach(char => {
        if (validCharacters.indexOf(char) > -1) {
            lettersArr.push(char);
        }
    });

    if (lettersArr.join('') === lettersArr.reverse().join('')) {
        return true;
    } else {
        return false;
    }
}

console.log(isPalindrome('Madam I\'m Adam'));