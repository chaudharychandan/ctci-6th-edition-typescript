import {
    isPalindroneOfPermutation
} from '.';

describe('isPalindroneOfPermutation', () => {
    it('returns `true` when string is empty', () => {
        const str = "";

        const result = isPalindroneOfPermutation(str);

        expect(result).toBe(true);
    });

    it('returns `true` when string is of length 1', () => {
        const str = "a";

        const result = isPalindroneOfPermutation(str);

        expect(result).toBe(true);
    });

    it('returns `true` when string has all same characters', () => {
        const str = "aaaaaaaaaaaaaaaa";

        const result = isPalindroneOfPermutation(str);

        expect(result).toBe(true);
    });

    it('returns `true` when string has only one charatcer of odd count', () => {
        const str = "Tact Coa";

        const result = isPalindroneOfPermutation(str);

        expect(result).toBe(true);
    });

    it('returns `false` when string has two charatcers of odd count', () => {
        const str = "Tact Cop";

        const result = isPalindroneOfPermutation(str);

        expect(result).toBe(false);
    });
});
