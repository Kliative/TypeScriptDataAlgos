import { BubbleSort } from "../Algos/BubbleSort";

describe('Bubble sort', () => {
    it('sorts an array', () => {
        expect(BubbleSort.bubbleSort([100, -40, 500, -124, 0, 21, 7])).toEqual([-124, -40, 0, 7, 21, 100, 500]);
    });
});
