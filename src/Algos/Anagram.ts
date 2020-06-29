export default class Anagram {
    static anagramsLong = (strA: string, strB: string): boolean => {
        const aCharMap: any = Anagram.buildCharMap(strA);
        const bCharMap: any = Anagram.buildCharMap(strB);

        if (Object.keys(aCharMap).length !== Object.keys(bCharMap).length) {
            return false;
        }

        for (const char in aCharMap) {
            if (aCharMap[char] !== bCharMap[char]) {
                return false;

            }
        }

        return true;

    }

    static buildCharMap = (str: string): string => {
        const charMap: any = {};

        for (const char of str.replace('/[^\w]g', '').toLowerCase()) {
            charMap[char] = charMap[char] + 1 || 1
        }
        return charMap;
    }
    /**
      * Short versions
      *
      * @param {string} strA
      * @param {string} strB
      * @returns {boolean}
      */

    static anagramShort = (strA: string, strB: string): boolean => {
        return Anagram.cleanStrings(strA) === Anagram.cleanStrings(strB);
    }

    static cleanStrings = (str: string): string => {
        return str.replace('/[^\w]g', '').toLowerCase().split('').join('');
    }
}