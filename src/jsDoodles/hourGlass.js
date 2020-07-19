const reducer = (a, b) => a + b;


const hourGlass = (array) => {
    let i = 0,
        odArr = [],
        evArr = [],
        redArr = [];
    for (let i = 0; i < array.length; i++) {


        for (let e = 0; e < array[i].length - 1; e++) {
            let slice = array[i].slice(e, e + 3);
            if (slice.length === 3) {
                if (i % 2 !== 0) {
                    redArr.push(slice);
                }
                evArr.push(slice);

            }

        }

        if (i != 0 && i != array.length - 1) {
            for (let o = 1; o < array.length - 1; o++) {
                odArr.push(array[i][o]);
            }

        }
    }

    let finalArr = [], maxSum = 0;
    for (let index = 0; index < odArr.length; index++) {
        finalArr.push(evArr[index].reduce((a, b) => a + b) + evArr[index + odArr.length / 2].reduce((a, b) => a + b) + odArr[index])
    }

    return Math.max(...finalArr);


}

// hourGlass([[0, 1, 2, 3, 4, 5], [0, 1, 2, 3, 4, 5], [0, 1, 2, 3, 4, 5], [0, 1, 2, 3, 4, 5], [0, 1, 2, 3, 4, 5], [0, 1, 2, 3, 4, 5]]);

// hourGlass([
//     [2, 4, 6, 8, 10, 12],
//     [1, 3, 5, 7, 9, 11],
//     [2, 4, 6, 8, 10, 12],
//     [1, 3, 5, 7, 9, 11],
//     [2, 4, 6, 8, 10, 12],
//     [1, 3, 5, 7, 9, 11],
// ]);

console.warn(hourGlass([
    [-9, -9, -9, 1, 1, 1],
    [0, -9, 0, 4, 3, 2],
    [-9, - 9, -9, 1, 2, 3],
    [0, 0, 8, 6, 6, 0],
    [0, 0, 0, -2, 0, 0],
    [0, 0, 1, 2, 4, 0]]));


    console.warn(hourGlass([[0, -4, -6, 0, -7, -6],
[-1, -2, -6, -8, -3, -1],
[-8, -4, -2, -8, -8, -6],
[-3, -1, -2, -5, -7, -4],
[-3, -5, -3, -6, -6, -6],
[-3, -6, 0, -8, -6, -7]]));