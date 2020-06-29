

import MergeSort from '../Algos/MergeSort';
describe('MergeSort', function () {
    it('MergeSort is defined', () => {
        expect(MergeSort.merge).toBeTruthy();
        expect(MergeSort.mergeSort).toBeTruthy();
    });

    it('Merge Sort should take arr = [6000,34,203,3,764,200,984,198,764,1,9,1] and return [1, 1,3, 9, 34, 198, 200, 203,764, 764,984,6000]', () => {
        expect(MergeSort.mergeSort([6000, 34, 203, 3, 764, 200, 984, 198, 764, 1, 9, 1])).toEqual([1, 1, 3, 9, 34, 198, 200, 203, 764, 764, 984, 6000]);
    });


    it('Merge Sort should take arr = [5,8,3,67] and return [5,8,3,67]', () => {
        expect(MergeSort.mergeSort([5,8,3,67])).toEqual([ 3, 5, 8, 67 ]);
    });

});
