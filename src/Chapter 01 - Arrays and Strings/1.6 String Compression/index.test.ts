import {
    stringCompression
} from '.';

describe('stringCompression', () => {
    it('returns empty string if the input string is empty', () => {
        const str = "";

        const result = stringCompression(str);

        expect(result).toBe(str);
    });

    it('returns the input string if the length of input string is less than 3', () => {
        const str = "ab";

        const result = stringCompression(str);

        expect(result).toBe(str);
    });

    it('returns the input string if the compressed string\'s length is not less then input string', () => {
        const str = "abca";
        const expectedResult = "abca";

        const result = stringCompression(str);

        expect(result).toBe(expectedResult);
    });

    it('returns compressed string with length less than input string', () => {
        const str = "aabcccccaaa";
        const expectedResult = "a2b1c5a3";

        const result = stringCompression(str);

        expect(result).toBe(expectedResult);
    });
});
