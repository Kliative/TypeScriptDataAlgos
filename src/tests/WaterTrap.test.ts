import WaterTrap from '../Algos/WaterTrap';

describe('TwoSum', function () {
    it('TwoSum is defined', () => {
        expect(WaterTrap.rainCollection).toBeTruthy();
    });

    it('calling twosum with [1,0,2,1,0,1,3,2,1,2,1] should return 7', () => {
        expect( WaterTrap.rainCollection([1,0,2,1,0,1,3,2,1,2,1])).toEqual(6 );
    });

    it('calling twosum with [10,0,10] should return 10', () => {
        expect( WaterTrap.rainCollection([10,0,10])).toEqual(10);
    });

    it('calling twosum with [0,10,0] should return 0', () => {
        expect( WaterTrap.rainCollection([0,10,0])).toEqual(0);
    });

});
