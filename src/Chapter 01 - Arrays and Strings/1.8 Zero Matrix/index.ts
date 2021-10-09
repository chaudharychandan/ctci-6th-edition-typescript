/**
 * Sets entire row & column to zero if an element inside matrix is 0
 *
 * Time complexity: O(NM)
 * Space complexity: O(1)
 *
 * @param matrix The input NxM matrix
 */
export function setZeros(matrix: number[][]): void {
    let rowHasZero = false;
    let coloumnHasZero = false;

    // check if first row has zero
    for (const cell of matrix[0]) {
        if (cell === 0) {
            rowHasZero = true;
            break;
        }
    }

    // check if first column has zero
    for (const row of matrix) {
        if (row[0] === 0) {
            coloumnHasZero = true;
            break;
        }
    }

    // check for zeros in rest of the array
    for (let i = 1; i < matrix.length; i++) {
        for (let j = 1; j < matrix[0].length; j++) {
            if (matrix[i][j] === 0) {
                matrix[i][0] = 0;
                matrix[0][j] = 0;
            }
        }
    }

    // zeroify rows based on first column
    for (let i = 0; i < matrix.length; i++) {
        if (matrix[i][0] === 0) {
            zeroifyRow(matrix, i);
        }
    }

    // zeroify columns based on first row
    for (let j = 0; j < matrix.length; j++) {
        if (matrix[0][j] === 0) {
            zeroifyCol(matrix, j);
        }
    }

    // zeroify the first row
    if (rowHasZero) {
        zeroifyRow(matrix, 0);
    }

    // zeroify the first column
    if (coloumnHasZero) {
        zeroifyCol(matrix, 0);
    }
}

function zeroifyRow(matrix: number[][], rowIndex: number): void {
    for (let j = 0; j < matrix[rowIndex].length; j++) {
        matrix[rowIndex][j] = 0;
    }
}

function zeroifyCol(matrix: number[][], colIndex: number): void {
    for (const row of matrix) {
        row[colIndex] = 0;
    }
}
