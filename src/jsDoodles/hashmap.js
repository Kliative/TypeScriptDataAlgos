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

// ___________-----------------__________________------______-----_---_-_-_-__-_-__-__-----------------_--_-_-_--------

const foreachLoop = (arrLet) => {
    let hashTableNumKeyFun = {};
    for (let i = 0; i < arrLet.length; i++) {
         hashTableNumKeyFun[i] = arrLet[i];
        
    }
    
    console.warn(hashTableNumKeyFun[1]);
}

foreachLoop(arrLet);

const foreachLoopNum = (arrLet) => {
    let hashTableNumKeyFun = {};
    for (let i = 0; i < arrLet.length; i++) {
         hashTableNumKeyFun[arrLet[i]] = i;
        
    }
    
    console.warn(hashTableNumKeyFun['b']);
}

foreachLoopNum(arrLet);