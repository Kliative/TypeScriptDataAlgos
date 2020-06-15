export default class Fibonnaci {


    /**
     * Recursive
     * @param {number} position
     * @returns {number}
     */
    static fibR = (position: number): number => {
        if (position < 3) {
            return 1;
        } else {
            return Fibonnaci.fibR(position - 1) + Fibonnaci.fibR(position - 2);
        }
    }


    /**
     * Recursive 2
     * @param {number} position
     * @returns {number}
     */
    static fibR2 = (position: number): number => {
        if (position < 2) {
            return position;
        } else {
            return Fibonnaci.fibR2(position - 1) + Fibonnaci.fibR2(position - 2);
        }
    }

    /**
     * Recursive Iterative
     *
     * @param {number} num
     * @returns {number}
     */
    static fibI = (num: number) => {
        const result = [0, 1];

        for (let i = 2; i <= num; i++) {
            const a = result[i - 1];
            const b = result[i - 2];

            result.push(a + b)
        }

        return result[num];
    }

    /**
     * Recursive with memoization
     *
     * @param {number} memNum
     * @returns {number}
     */

    static fibMemoize = (memNum: number): number => {
        const memo: any = {};
        const fibNumMem = (memNum: number): number => {
            if (memNum === 0) return 0;
            if (memNum === 0) return 1;
            if (memo[`${memNum}`]) return memo[`${memNum}`];



            return memo[`${memNum}`] = fibNumMem(memNum - 1) + fibNumMem(memNum - 2);
        }

        return fibNumMem(memNum)
    }

    static fbnMemo =  (index: number, cache: number[] = []): number => {
        cache = cache;

        if (cache[index]) {
            return cache[index];
        } else {
            if (index < 3) {
                return 1;
            } else {
                cache[index] - Fibonnaci.fbnMemo(index - 1, cache) + Fibonnaci.fbnMemo(index - 2, cache);
            }

        }

        return cache[index];

    };
    static slowFib = (slowNum: number): number => {
        if (slowNum < 2) {
            return slowNum;
        }

        return Fibonnaci.fibR(slowNum - 1) + Fibonnaci.fibR(slowNum - 2);
    }

    // fib = this.memoize(this.slowFib);

}