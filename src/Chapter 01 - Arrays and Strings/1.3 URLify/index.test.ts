import {
    replaceSpaces
} from '.';

import {
    areStringsEqual
} from '../../utils';

describe('replaceSpaces', () => {
    it('doesn\'t change anything when there is no space in the string', () => {
        const str = ["M", "r", "J", "o", "h", "n", "S", "m", "i", "t", "h"];
        const size = 11;

        replaceSpaces(str, size);
        const expectedResult = ["M", "r", "J", "o", "h", "n", "S", "m", "i", "t", "h"];

        expect(areStringsEqual(str, expectedResult)).toBe(true);
    });

    it('replaces all spaces with `%20` when string has spaces', () => {
        const str = ["M", "r", " ", "J", "o", "h", "n", " ", "S", "m", "i", "t", "h", "", "", "", ""];
        const size = 13;

        replaceSpaces(str, size);
        const expectedResult = ["M", "r", "%", "2", "0", "J", "o", "h", "n", "%", "2", "0", "S", "m", "i", "t", "h"];

        expect(areStringsEqual(str, expectedResult)).toBe(true);
    });
});
