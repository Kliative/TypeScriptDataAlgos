let arrLet = 'abcdefghijklmnopqrstuvwxyz'
const loops = () => {



    /**
     * Loops through the array for as many times as the length of the array
     * but for each loop at starts at the next point in the array
     * eg
     * 
     * Iteration 1
     * i= 0 j =0 arrLet[0]=a <---- starts at a or [0]
     * i= 0 j =1 arrLet[1]=b
     * i= 0 j =2 arrLet[2]=c
     * i= 0 j =3 arrLet[3]=d
     * 
     * Iteration 2
     * i= 1 j =1 arrLet[1]=b <---- starts at b or [1]
     * i= 1 j =2 arrLet[2]=c
     * i= 1 j =3 arrLet[3]=d
     * i= 1 j =4 arrLet[4]=e
     * 
     * Iteration 3
     * i= 2 j =2 arrLet[2]=c <---- starts at b or [2]
     * i= 2 j =3 arrLet[3]=d
     * i= 2 j =4 arrLet[4]=e
     * i= 2 j =5 arrLet[5]=f
     */
    for (let i = 0; i < arrLet.length; i++) {
        for (let j = i; j < arrLet.length; j++) {
            console.log(`i= ${i} j =${j} arrLet[${j}]=${arrLet[j]}`);
        }
    }

}


/**
 * BACK BACK FORTH AND FORTH
 Prins  
+ a
+ b
+ c
+ d
+ e
+ f
+ g
+ h
+ i
+ j
+ k
+ l
+ m
+ n
+ o
+ p
+ q
+ r
+ s
+ t
+ u
+ v
+ w
+ x
+ y
+ z
- y
- x
- w
- v
- u
- t
- s
- r
- q
- p
- o
- n
- m
- l
- k
- j
- i
- h
- g
- f
- e
- d
- c
- b
- a
 */

const loopStartToEndAndBackWhile = () => {
    /**
     * loops from start to finsh and back again using a while loop
     */
    let i = 0;
    while (i < arrLet.length) {
        console.log(`+ ${arrLet[i]}`);
        i++;
    }
    let n = i - 1;

    while (n >= 0) {
        console.log(`- ${arrLet[n]}`);
        n--;
    }
}


const loopStartToEndAndBackFor = () => {

    /**
     * loops from start to finsh and back again using a for loop
     */

    let i = 0;
    for (; i < arrLet.length; i++) {

        console.log(`+ ${arrLet[i]}`);
    }
    let n = i - 2;

    for (; n >= 0; n--) {
        console.log(`- ${arrLet[n]}`);

    }
}

// loopStartToEndAndBackFor();




/**
 * Starts at the middel and decrements to 0 then starts at 0 adn increments to middle
- n
- m
- l
- k
- j
- i
- h
- g
- f
- e
- d
- c
- b
- a
+ b
+ c
+ d
+ e
+ f
+ g
+ h
+ i
+ j
+ k
+ l
+ m
 */

const loopMiddelOut = () => {

    /**
     * loops from start to finsh and back again using a for loop
     */

    let i = arrLet.length/2;
    for (; i >= 0; i--) {

        console.log(`+ ${arrLet[i]}`);
    }

    let n = i+2;

    for (; n < arrLet.length/2; n++) {
        console.log(`- ${arrLet[n]}`);

    }
}

// loopMiddelOut();


const loopMiddelOutWhile = () => {

    /**
     * loops from start to finsh and back again using a for loop
     */
    let n = arrLet.length/2;
    while (n >= 0) {
        console.log(`- ${arrLet[n]}`);
        n--;
    }
    let i = n + 2;
   
    while (i < arrLet.length/2) {
        console.log(`+ ${arrLet[i]}`);
        i++;
    }


  
}

loopMiddelOutWhile();