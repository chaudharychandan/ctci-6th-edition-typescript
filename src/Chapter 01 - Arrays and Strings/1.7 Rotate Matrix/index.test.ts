import {
    rotateMatrix
} from '.';

import {
    areMatricesSimilar
} from '../../utils';

describe('rotateMatrix', () => {
    it('rotates 3x3 matrix', () => {
        const matrix = [[1,2,3], [4,5,6], [7,8,9]];
        const expectedResult = [[1,4,7], [2,5,8], [3,6,9]];

        rotateMatrix(matrix);

        expect(areMatricesSimilar(matrix, expectedResult));
    });

    it('rotates 4x4 matrix', () => {
        const matrix = [[1,2,3,4], [5,6,7,8], [9,10,11,12], [13,14,15,16]];
        const expectedResult = [[1,5,9,13], [2,6,10,14], [3,7,11,15], [4,8,12,16]];

        rotateMatrix(matrix);

        expect(areMatricesSimilar(matrix, expectedResult));
    });
});
