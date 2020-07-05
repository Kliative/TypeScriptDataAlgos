# Trapping Rain Water a.k.a ThirstTrap

Create a function that takes a Roman numeral as its argument and returns its value as a numeric decimal integer. You don't need to validate the form of the Roman numeral.

Modern Roman numerals are written by expressing each decimal digit of the number to be encoded separately, starting with the leftmost digit and skipping any 0s. So 1990 is rendered "MCMXC" (1000 = M, 900 = CM, 90 = XC) and 2008 is rendered "MMVIII" (2000 = MM, 8 = VIII). The Roman numeral for 1666, "MDCLXVI", uses each letter in descending order.

Example:

solution('XXI'); // should return 21

Help:

Symbol Value
I 1
V 5
X 10
L 50
C 100
D 500
M 1,000

## Ref

rosettacode.org

https://www.codewars.com/kata/51b6249c4612257ac0000005/train/typescript

## While loop, fast runtime and lower memory complexity

This solution is different in the way that it doesn't require 3 loops but instead loops twice correct what it thought on the second right pass

# Using a Switch

```typescript
/**
*  Switch Approach
* 1. Create and swithc statement to assign the roman numeral to their corresponding number
* 2. Set your total to the first Numaral in string to add or subtract the additional value
* 3. Loop through the string and check if the previous number is greater or equal to the current number 
    3.1 add the current numeber to total.
* 4. Else If the current number is greater than the previous number
    4.1 Subrtact the (previous number * 2) from the total and then add the current number
*/

export function RomanSwitchConvert(romanString: string): number {
  const RomanNumToNumber = (c: string): number => {
    switch (c) {
      case "I":
        return 1;
      case "V":
        return 5;
      case "X":
        return 10;
      case "L":
        return 50;
      case "C":
        return 100;
      case "D":
        return 500;
      case "M":
        return 1000;
      default:
        return -1;
    }
  };

  let total = RomanNumToNumber(romanString.charAt(0)),
    pre,
    curr;

  for (let i = 1; i < romanString.length; i++) {
    curr = RomanNumToNumber(romanString.charAt(i));
    pre = RomanNumToNumber(romanString.charAt(i - 1));
    if (curr <= pre) {
      total += curr;
    } else {
      total = total - pre * 2 + curr;
    }
  }

  return total;
}
```

# Using a for loop

This approach is almost the same though it uses an Object for
converting the numeral into a number. Object is set outside the metho
as to not call it every time

```typescript

    static RomanToNumObj: { [key: string]: number } = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };

    static RomanFor = (romanString: string): number => {

        // Split atring into array
        const romArr = romanString.split('');
        // Setup Variables
        let total = 0,
            // current Numeral
            current: string,
            // current Numeral Value
            currentValue: number,
            // next Numeral
            next: string,
            // next Numeral Value
            nextValue: number;


        //loop through array
        for (let i = 0; i < romArr.length; i++) {

            // set the current Numeral to that of i
            current = romArr[i];
            // use that numeral to deduce its value
            currentValue = RomanNumeralsDecoders.RomanToNumObj[current];


            // set the next Numeral to that of i
            next = romArr[i + 1];
            // use that numeral to deduce its value
            nextValue = RomanNumeralsDecoders.RomanToNumObj[next];

            // If current value is less than the next value subtract
            // this neatly keeps the shecking within the confines of the array
            if (currentValue < nextValue) {
                total -= (currentValue);
            } else {
                // else add it to the total
                total += (currentValue);
            }
        }
        return total;
    }
```
