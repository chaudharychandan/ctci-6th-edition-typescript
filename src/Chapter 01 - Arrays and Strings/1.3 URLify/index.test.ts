import {
    replaceSpaces
} from '.';

/**
 * Compare equality of two strings
 *
 * @param str1 One input string
 * @param str2 Another input string
 * @returns `true` if both strings are equal, otherwise `false`
 */
function areStringsEqual(str1: string[], str2: string[]): boolean {
    if (str1.length !== str2.length) return false;

    for (let i = 0; i < str1.length; i++) {
        const char = str1[i];
        const expectedChar = str2[i];
        if (char !== expectedChar) return false;
    }

    return true;
}

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
