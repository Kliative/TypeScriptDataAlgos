const canThreePartsEqualSum = (arr) => {
    var chunks = [],
        i = 0,
        n = arr.length,
        len =3;

    while (i < n) {
        chunks.push(arr.slice(i, i += len));
    }

    console.warn(chunks);
}

    /**
     * it: 1
     * ct: 0
     * 
     * splice(0,third)
     * ---
     * it: 2
     * ct: 1
     * 
     * splice(0,third)
     */


canThreePartsEqualSum([0, 2, 1, -6, 6, -7, 9, 1, 2, 0, 1]);

