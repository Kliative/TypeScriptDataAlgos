
import Fibonacci from '../Algos/Fibonacci';
describe('calculate', function () {
    it('Fibonacci is defined', () => {
        expect(Fibonacci).toBeTruthy();
    });

    it('calculates correct Recursive Fibonacci value for 1', () => {
        expect(Fibonacci.fibR(1)).toEqual(1);
    });

    it('calculates correct Recursive Fibonacci 2 value for 2', () => {
        expect(Fibonacci.fibR2(2)).toEqual(1);
    });

    it('calculates correct Iterative Fibonacci value for 3', () => {
        expect(Fibonacci.fibI(3)).toEqual(2);
    });

    it('calculates correct Memooize Fibonacci value for 15', () => {
        expect(Fibonacci.fibm(15)).toEqual(610);
    });

    it('calculates correct Memooize Fibonacci 2 value for 15', () => {
        expect(Fibonacci.fibm(15, [])).toEqual(610);
    });

    it('calculates correct Slow Memooize Fibonacci value for 39', () => {
        expect(Fibonacci.slowFib(39)).toEqual(63245986);
    });

    it('calculates correct against each other', () => {
        expect(Fibonacci.fibR(10)).toEqual(Fibonacci.fibR2(10));
        expect(Fibonacci.fibR(10)).toEqual(Fibonacci.fibI(10));
    });
});