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
     * fibMem take slowfib as a paramater and returns number
     *
     * @param {number} memNum
     * @returns {number}
     */

    static fibMem = (func: Function): Function => {
        const cache: any = {};
        return (...args: any): number => {
            if (cache[args]) {
                return cache[args];
            }

            const result = func.apply(Fibonnaci, args);
            cache[args] = result;

            return result;
        };

    };


    static slowFib = (slowNum: number): number => {
        if (slowNum < 2) {
            return slowNum;
        }

        return Fibonnaci.fibR(slowNum - 1) + Fibonnaci.fibR(slowNum - 2);
    }

    static fibm = Fibonnaci.fibMem(Fibonnaci.slowFib);

}