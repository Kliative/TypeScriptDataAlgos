import RomanNumeralsDecoders from '../Algos/RomanNumeralsDecoders/RomanNumeralsDecoders';
describe('RomanNumeralsDecoders', function () {
    it('RomanNumeralsDecoders is defined', () => {
        expect(RomanNumeralsDecoders.RomanSwtich).toBeTruthy();
    });

    it('Calling RomanSwtich with `XXI` prints out 21', () => {
        expect(RomanNumeralsDecoders.RomanSwtich('XXI')).toEqual(21);
    });

    it('Calling RomanSwtich with `I` prints out 1', () => {
        expect(RomanNumeralsDecoders.RomanSwtich('I')).toEqual(1);
    });

    it('Calling RomanSwtich with `IV` prints out 4', () => {
        expect(RomanNumeralsDecoders.RomanSwtich('IV')).toEqual(4);
    });

    it('Calling RomanSwtich with `MMVIII` prints out 2008', () => {
        expect(RomanNumeralsDecoders.RomanSwtich('MMVIII')).toEqual(2008);
    });

    it('Calling RomanSwtich with `MDCLXVI` prints out 1666', () => {
        expect(RomanNumeralsDecoders.RomanSwtich('MDCLXVI')).toEqual(1666);
    });
    ///

    it('Calling RomanFor with `XXI` prints out 21', () => {
        expect(RomanNumeralsDecoders.RomanFor('XXI')).toEqual(21);
    });

    it('Calling RomanFor with `I` prints out 1', () => {
        expect(RomanNumeralsDecoders.RomanFor('I')).toEqual(1);
    });

    it('Calling RomanFor with `IV` prints out 4', () => {
        expect(RomanNumeralsDecoders.RomanFor('IV')).toEqual(4);
    });

    it('Calling RomanFor with `MMVIII` prints out 2008', () => {
        expect(RomanNumeralsDecoders.RomanFor('MMVIII')).toEqual(2008);
    });

    it('Calling RomanFor with `MDCLXVI` prints out 1666', () => {
        expect(RomanNumeralsDecoders.RomanFor('MDCLXVI')).toEqual(1666);
    });
});
