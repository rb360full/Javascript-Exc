// sudoku puzzle
// const puzzle = [
//     [1, 0, 2, 0, 0, 0, 0, 0, 0],
//     [0, 2, 0, 0, 0, 0, 0, 0, 0],
//     [0, 3, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0, 0]
// ];
// const size = 9;


const puzzle = [
    [0, 2, 0],
    [0, 1, 0],
    [0, 0, 0]
];
const size = 3;

function isValid(row, col, num) {
    // check row
    for (let i = 0; i < size; i++) {
        if (puzzle[row][i] === num) return false;
    }

    // check column
    for (let i = 0; i < size; i++) {
        if (puzzle[i][col] === num) return false;
    }

    return true;
}

function isEmpty(row, col) {
    if (!puzzle[row][col]) { return true }
}




function solve() {
    for (let row = 0; row < size; row++) {
        for (let col = 0; col < size; col++) {
            if (isEmpty(row, col)) {
                for (let num = 1; num <= size; num++) {
                    if (isValid(row, col, num)) {
                        puzzle[row][col] = num;
                        if (solve()) {
                            console.log('true');
                            return true
                        }
                        else {

                            console.log('false');
                            puzzle[row][col] = 0
                        }
                    }
                }
                return false
            }
        }
    }
    return true
}

solve();

console.log(puzzle);