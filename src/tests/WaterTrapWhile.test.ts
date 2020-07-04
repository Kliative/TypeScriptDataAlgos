import WaterTrapWhile from '../Algos/WaterTrap/while/WaterTrapWhile';

describe('TwoSum', function () {
    it('TwoSum is defined', () => {
        expect(WaterTrapWhile.ThirstTrap).toBeTruthy();
    });

    it('calling twosum with [1,0,2,1,0,1,3,2,1,2,1] should return 6', () => {
        expect(WaterTrapWhile.ThirstTrap([1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1])).toEqual(6);
    });

    it('calling twosum with [10,0,10] should return 10', () => {
        expect(WaterTrapWhile.ThirstTrap([10, 0, 10])).toEqual(10);
    });

    it('calling twosum with [0,10,0] should return 0', () => {
        expect(WaterTrapWhile.ThirstTrap([0, 10, 0])).toEqual(0);
    });

    // City Pantry Tests

    it('calling twosum with [4,2,4] should return 2', () => {
        expect(WaterTrapWhile.ThirstTrap([4, 2, 4])).toEqual(2);
    });

    it('calling twosum with [4, 1, 2, 4] should return 5', () => {
        expect(WaterTrapWhile.ThirstTrap([4, 1, 2, 4])).toEqual(5);
    });

    it('calling twosum with [5, 2, 3] should return 1', () => {
        expect(WaterTrapWhile.ThirstTrap([5, 2, 3])).toEqual(1);
    });

    // codewars

    it('calling twosum with [15,0,6,10,11,2,5] should return 20', () => {
        expect(WaterTrapWhile.ThirstTrap([15,0,6,10,11,2,5])).toEqual(20);
    });


    it('calling twosum with [1,0,5,2,6,3,10] should return 7', () => {
        expect(WaterTrapWhile.ThirstTrap([1,0,5,2,6,3,10])).toEqual(7);
    });

    
    it('calling twosum with [5,2,10] should return 3', () => {
        expect(WaterTrapWhile.ThirstTrap([5,2,10])).toEqual(3);
    });

    it('calling twosum with [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1] should return 6', () => {
        expect(WaterTrapWhile.ThirstTrap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1])).toEqual(6);
    });
});
