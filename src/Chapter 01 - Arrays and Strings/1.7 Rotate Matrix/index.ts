/**
 * Rotates NxN matrix by 90 degrees
 *
 * Time Complexity: O(N^2)
 * Space Complexity: O(1) - In place rotation
 *
 * @param matrix N*N number matrix
 * @returns undefined
 */
export function rotateMatrix(matrix: number[][]) {
    if (matrix.length === 0 || matrix[0].length === 0) return matrix;

    for (let i = 0; i < matrix.length; i++) {
        const row = matrix[i];
        for (let j = i; j < row.length; j++) {
            const temp = matrix[i][j];
            matrix[i][j] = matrix[j][i];
            matrix[j][i] = temp;
        }
    }
}
