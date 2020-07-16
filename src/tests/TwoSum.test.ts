import TwoSum from '../Algos/TwoSum';
describe('TwoSum', function () {
    it('TwoSum is defined', () => {
        expect(TwoSum.twoSumArr).toBeTruthy();
        expect(TwoSum.twoSumSingle).toBeTruthy();
    });

    it('calling twosum with [1,6,4,5,3,3] and 7 should return [[6, 1], [3, 4], [3, 4]]', () => {
        expect( TwoSum.twoSumArr([1,6,4,5,3,3],7)).toEqual([[6, 1], [3, 4], [3, 4]]);
    });
    it('calling twosum with [11,15,2,7] and 9 should return [2,3]', () => {
        expect( TwoSum.twoSumSingle([11,15,2,7],9)).toEqual([2,3]);
    });
   
    it('calling twosum with [3,2,4] should return [1,2]', () => {
        expect( TwoSum.twoSumSingle([3,2,4],6)).toEqual([1,2]);
    });
});
