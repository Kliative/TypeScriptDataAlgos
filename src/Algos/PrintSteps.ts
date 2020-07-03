class PrintSteps {

    static stepPrinter = (step: number) => {
        for (let row = 0; row < step; row++) {

            let stair = '';
            for (let column = 0; column < step; column++) {
                if (column <= row) {
                    stair += '#';
                } else {
                    stair += ' ';
                }
            }

            console.log(stair);
        }
    }
}
