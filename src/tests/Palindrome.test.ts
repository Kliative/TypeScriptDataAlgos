import Palindrome from '../Algos/Palindrome';
describe('Palindrome', function () {
    it('Palindrome is defined', () => {
        expect(Palindrome).toBeTruthy();
    });


    it('Palindrome returns true for trext', () => {
        expect(Palindrome.isPalindrome('Madam I\'m Adam')).toEqual(true);
    });


    it('Palindrome returns fasle for trext', () => {
        expect(Palindrome.isPalindrome('This is not a pal')).toEqual(false);
    });
});