function fizzBuzz(n) {
    
    let i =1;
    let FizzedBuzzed = [];
    
    while(i <= n){
        if( i % 5 === 0 && i % 3 === 0){
             FizzedBuzzed.push("FizzBuzz");
        } else if ( i % 5 === 0){
              FizzedBuzzed.push("Buzz")            
        } else if (  i % 3 === 0) {
              FizzedBuzzed.push("Fizz")     
        } else {
             FizzedBuzzed.push(`${i}`); 
        }
         i++;
    }
    return FizzedBuzzed;
    
};

console.warn(fizzBuzz(15));