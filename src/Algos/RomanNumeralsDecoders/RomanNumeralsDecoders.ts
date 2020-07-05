export default class RomanNumeralsDecoders {


    static RomanSwtich = (romanString: string): number => {
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


    /**
     * Object to get vaulr of roman numerals
     * this is outside the method as to not run it eevrytime
     */


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
}