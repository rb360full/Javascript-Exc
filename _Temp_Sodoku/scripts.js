// sudoku puzzle
const puzzle = [
    [0, 1, 2, 0],
    [0, 2, 0, 0],
    [0, 3, 0, 0],
    [0, 0, 0, 0]
];
const size = 4;

// function to check if a number is valid in a cell
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

// backtracking function to solve the puzzle  
function solve() {
    for (let row = 0; row < size; row++) {
        for (let col = 0; col < size; col++) {
            if (puzzle[row][col] === 0) {
                for (let num = 1; num <= size; num++) {
                    if (isValid(row, col, num)) {
                        puzzle[row][col] = num;

                        if (solve()) {
                            return true;
                        } else {
                            puzzle[row][col] = 0;
                        }
                    }
                }
                return false;
            }
        }
    }
    return true;
}

// call solve function
solve();

// print solved puzzle
console.log(puzzle);
