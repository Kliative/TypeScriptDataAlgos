const rotLeft = (d, a) => {


    let resultString, i = 0;

    while (i < d) {
        a.unshift(a.shift(a[i]));
        i++;
    }

    resultString = a.join(' ');


    return resultString;
}

console.warn(rotLeft(1, [1,2,3,4,5]));