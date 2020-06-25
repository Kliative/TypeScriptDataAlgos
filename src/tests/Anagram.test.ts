import Anagram from '../Algos/Anagram';

describe('Anagram', function () {
    it('Anagram is defined', () => {
        expect(Anagram.anagramsLong).toBeTruthy();
    });

    it('"hello" is an anagramsLong of "llohe"', () => {
        expect(Anagram.anagramsLong('hello', 'llohe')).toBeTruthy();
    });

    it('"Whoa! Hi!" is an anagramsLong of "Hi! Whoa!"', () => {
        expect(Anagram.anagramsLong('Whoa! Hi!', 'Hi! Whoa!')).toBeTruthy();
    });

    it('"One One" is not an anagramsLong of "Two two two"', () => {
        expect(Anagram.anagramsLong('One One', 'Two two two')).toBeFalsy();
    });

    it('"One one" is not an anagramsLong of "One one c"', () => {
        expect(Anagram.anagramsLong('One one', 'One one c')).toBeFalsy();
    });

    it('"A tree, a life, a bench" is not an anagramsLong of "A tree, a fence, a yard"', () => {
        expect(
            Anagram.anagramsLong('A tree, a life, a bench', 'A tree, a fence, a yard')
        ).toBeFalsy();

    });

    // 
    it('"One One" is not an anagramShort of "Two two two"', () => {
        expect(Anagram.anagramShort('One One', 'Two two two')).toBeFalsy();
    });

    it('"One one" is not an anagramShort of "One one c"', () => {
        expect(Anagram.anagramShort('One one', 'One one c')).toBeFalsy();
    });

    it('"A tree, a life, a bench" is not an anagramShort of "A tree, a fence, a yard"', () => {
        expect(
            Anagram.anagramShort('A tree, a life, a bench', 'A tree, a fence, a yard')
        ).toBeFalsy();

    });
});
