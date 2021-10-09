import {
    setZeros
} from '.';

import {
    areMatricesSimilar
} from 'utils';

describe('setZeros', () => {
    it('sets the entire row and coloumn to 0 of 3x3 matrix', () => {
        const matrix = [
            [1,2,0],
            [4,5,2],
            [7,2,8]
        ];
        const expectedResult = [
            [0,0,0],
            [4,5,0],
            [7,2,0],
        ]

        setZeros(matrix);

        expect(areMatricesSimilar(matrix, expectedResult));
    });

    it('sets the entire row and coloumn to 0 of 3x4 matrix', () => {
        const matrix = [
            [1,2,0,1],
            [4,5,2,2],
            [7,2,8,0]
        ];
        const expectedResult = [
            [0,0,0,0],
            [4,5,0,0],
            [0,0,0,0],
        ]

        setZeros(matrix);

        expect(areMatricesSimilar(matrix, expectedResult));
    });

    it('doesn\'t change anything when there is no zero in the matrix', () => {
        const matrix = [
            [1,2,9,1],
            [4,5,2,2],
            [7,2,8,6]
        ];
        const expectedResult = [
            [1,2,9,1],
            [4,5,2,2],
            [7,2,8,6]
        ]

        setZeros(matrix);

        expect(areMatricesSimilar(matrix, expectedResult));
    });

});
