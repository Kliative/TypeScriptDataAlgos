let arrLet = 'abcdefghijklmnopqrstuvwxyz'.split('');

let hashTableAlphKey = {};

arrLet.forEach((val, i) => {
    return hashTableAlphKey[val] = i;
});

console.warn(hashTableAlphKey['b']);
let hashTableNumKey = {};

arrLet.forEach((val, i) => {
    return hashTableNumKey[i] = val;
});

console.warn(hashTableNumKey[1]);