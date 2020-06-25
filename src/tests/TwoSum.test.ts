import TwoSum from '../Algos/TwoSum';
describe('TwoSum', function () {
    it('TwoSum is defined', () => {
        expect(TwoSum.twoSum).toBeTruthy();
    });

    it('calling twosum with [1,6,4,5,3,3] should return [[6, 1], [3, 4], [3, 4]]', () => {
        expect( TwoSum.twoSum([1,6,4,5,3,3],7)).toEqual([[6, 1], [3, 4], [3, 4]]);
    });


});
