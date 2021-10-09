import {
    checkPermutation,
    checkPermutationWithNoExtraDataStructure
} from '.';

describe('checkPermutation', () => {
    it('returns true when both strings are empty', () => {
        const str1: string[] = [];
        const str2: string[] = [];

        const result = checkPermutation(str1, str2);

        expect(result).toBe(true);
    });

    it('returns true when both strings are equal', () => {
        const str1: string[] = ["a", "b", "c", "d"];
        const str2: string[] = ["a", "b", "c", "d"];

        const result = checkPermutation(str1, str2);

        expect(result).toBe(true);
    });

    it('returns false when one string is empty and other is not', () => {
        const str1: string[] = [];
        const str2: string[] = ["a", "b", "c", "d"];

        const result = checkPermutation(str1, str2);

        expect(result).toBe(false);
    });

    it('returns false when one is not a permutation of other', () => {
        const str1: string[] = ["p", "q", "r"];
        const str2: string[] = ["a", "b", "c", "d"];

        const result = checkPermutation(str1, str2);

        expect(result).toBe(false);
    });

    it('returns true when one is a permutation of other', () => {
        const str1: string[] = ["a", "d", "c", "b"];
        const str2: string[] = ["a", "b", "d", "c"];

        const result = checkPermutation(str1, str2);

        expect(result).toBe(true);
    });
});

describe('checkPermutationWithNoExtraDataStructure', () => {
    it('returns true when both strings are empty', () => {
        const str1: string[] = [];
        const str2: string[] = [];

        const result = checkPermutationWithNoExtraDataStructure(str1, str2);

        expect(result).toBe(true);
    });

    it('returns true when both strings are equal', () => {
        const str1: string[] = ["a", "b", "c", "d"];
        const str2: string[] = ["a", "b", "c", "d"];

        const result = checkPermutationWithNoExtraDataStructure(str1, str2);

        expect(result).toBe(true);
    });

    it('returns false when one string is empty and other is not', () => {
        const str1: string[] = [];
        const str2: string[] = ["a", "b", "c", "d"];

        const result = checkPermutationWithNoExtraDataStructure(str1, str2);

        expect(result).toBe(false);
    });

    it('returns false when one is not a permutation of other', () => {
        const str1: string[] = ["p", "q", "r"];
        const str2: string[] = ["a", "b", "c", "d"];

        const result = checkPermutationWithNoExtraDataStructure(str1, str2);

        expect(result).toBe(false);
    });

    it('returns true when one is a permutation of other', () => {
        const str1: string[] = ["a", "d", "c", "b"];
        const str2: string[] = ["a", "b", "d", "c"];

        const result = checkPermutationWithNoExtraDataStructure(str1, str2);

        expect(result).toBe(true);
    });
});
