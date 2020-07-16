const countBattleShips2 = (board) => {

    let count = 0;
    // Loop  through board array 
    for (let i = 0; i < board.length; i++) {
        // Loop through each array in the board array 
        for (let j = 0; j < board[i].length; j++) {
            // 👆🏿 these loops allows us to traverse 
            // the array and access all nested arrays

            // 👇🏿 this is where we disect the array

            // Check if the loop counters at greater than 0
            // so we know we are in the begining of the array
            if (i > 0 && j > 0) {
                // check if the row the before the element being check has the '.'
                // and check if the element before the element being checked is equal to '.'
                // and finally if the element being checked is equal to X
                if (board[i - 1][j] === '.' && board[i][j - 1] === '.' && board[i][j] === "X") {
                    
                    //if true then increase counter by 1
                    count++;
                }
                // else if the iterm in the column at position board[i]
                // and the first element 
            } else if (i > 0 && j === 0) {
                // checked if the row of current element being checked at position board[i][j]
                // is equal to X and if the row on the left of the current element 
                // being checked is a '.'
                if (board[i - 1][j] === '.' && board[i][j] === 'X') {
                    // if true  increase counter by 1
                    count++
                }
                // this checks each first row aka the 
                // first array in the board array 
            } else if (j > 0 && i === 0) {
                // now this check is the current element is equal to X 
                // element before it equal '.'
                if (board[i][j - 1] === '.' && board[i][j] === 'X') {
                    // if so increase the counter 
                    count++
                }
            } else {
                // after all that is the current element equal to X
                if (board[i][j] === 'X') {
                    count++;
                }
            }

        }

    }

    return count;
}
/**
* @param {character[][]} board
* @return {number}
*/
const countBattleships = (board) => {
    var count = 0;
    for (var i = 0; i < board.length; i++) {
        for (var j = 0; j < board[i].length; j++) {


            if (i > 0 && j > 0) {
                if (board[i - 1][j] === '.' && board[i][j - 1] === '.' && board[i][j] === "X") {
                    count++;
                }
            } else if (i > 0 && j === 0) {
                if (board[i - 1][j] === '.' && board[i][j] === "X") {
                    count++;
                }
            } else if (j > 0 && i === 0) {
                if (board[i][j - 1] === '.' && board[i][j] === "X") {
                    count++;
                }
            } else {
                //(i===0&&j===0)===true
                if (board[i][j] === "X") {
                    count++;
                }
            }

        }
    }
    console.warn(count);
};
console.warn(countBattleShips2([["X", ".", ".", "X"], [".", ".", ".", "X"], [".", ".", ".", "X"]]));
// countBattleShips([[".", ".", ".", "X"], ["X", "X", "X", "X"], [".", ".", ".", "X"]]);

/**
 *  Valid
 *
 *
 * [
 *  ["X",".",".","X"],
 *  [".",".",".","X"],
 *  [".",".",".","X"]
 * ]
 *
 *  Invalid
 *
 * [
 *  ["X",".",".","X"],
 *  ["X","X","X","X"],
 *  [".",".",".","X"]
 * ]
 *
 *
 */