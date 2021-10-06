import {
    checkPermutation
} from '.';

describe('checkPermutation', () => {
    it('returns true when both strings are empty', () => {
        const str1 = "";
        const str2 = "";

        const result = checkPermutation(str1, str2);

        expect(result).toBe(true);
    });

    it('returns true when both strings are equal', () => {
        const str1 = "abcd";
        const str2 = "abcd";

        const result = checkPermutation(str1, str2);

        expect(result).toBe(true);
    });

    it('returns false when one string is empty and other is not', () => {
        const str1 = "";
        const str2 = "abcd";

        const result = checkPermutation(str1, str2);

        expect(result).toBe(false);
    });

    it('returns false when one is not a permutation of other', () => {
        const str1 = "pqr";
        const str2 = "abcd";

        const result = checkPermutation(str1, str2);

        expect(result).toBe(false);
    });

    it('returns true when one is a permutation of other', () => {
        const str1 = "ad cb";
        const str2 = "ab dc";

        const result = checkPermutation(str1, str2);

        expect(result).toBe(true);
    });
});
