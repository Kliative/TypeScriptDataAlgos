import FizzBuzz from '../Algos/FizzBuzz';
describe('FizzBuzz', function () {
    it('FizzBuzz is defined', () => {
        expect(FizzBuzz.fizzbuzz).toBeTruthy();
    });

    it('Calling fizzbuzz with `3` prints out buzz', () => {
        expect( FizzBuzz.fizzbuzz(3)).toEqual('fizz');
    });

    it('Calling fizzbuzz with `5` prints out buzz', () => {
        expect( FizzBuzz.fizzbuzz(5)).toEqual('buzz');
    });

    it('Calling fizzbuzz with `15` prints out buzz', () => {
        expect( FizzBuzz.fizzbuzz(15)).toEqual('fizzbuzz');
    });

});
