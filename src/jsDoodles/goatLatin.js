function toGoatLatin(sentence) {

    let vowels = 'aeiou'.split(''),
        sWorsArr = sentence.split(' '),
        letteArr = [],
        newWord = [],
        a = 'a';


    for (let i = 0; i < sWorsArr.length; i++) {
        let firstletter = sWorsArr[i][0];
        letteArr[i] = firstletter.toLowerCase();
        for (let j = 0; j < sWorsArr.length; j++) {

            if (letteArr[i] === vowels[j]) {
                newWord[i] = `${sWorsArr[i]}maa${a.repeat(i)}`;
                console.warn(newWord[i]);

                console.warn(letteArr[i], vowels[j], letteArr[i] === vowels[j]);
                break;
            } else {
                let firsLettRem = sWorsArr[i].split('').shift();
                let stringMissingFirst = sWorsArr[i].substring(1);
                newWord[i] = `${stringMissingFirst}${firsLettRem}maa${a.repeat(i)}`;
            }
        }
    }
    return newWord.join(' ');
};

console.warn(toGoatLatin("The quick brown fox jumped over the lazy dog"));

const toGoatLatin = function (S) {
    let result = ""
    let sentence = S.split(' ')
    for (let i = 0; i < sentence.length; i++) {

        let vowels = ["a", "e", "i", "o", "u"]
        let word = sentence[i].split('')
        let firstLetter = word[0]

        if (!vowels.includes(firstLetter.toLowerCase())) {
            word.splice(0, 1)
            word.push(firstLetter)
        }

        word.push("ma")
        let addon = ("a").repeat(i + 1)
        word.push(addon)
        result += word.join('') + ' '
    }
    return result.substring(0, result.length - 1)
}