import {
    isUniqueChars,
    isUniqueCharsWithNoAdditionalDataStructure
} from '.';

describe('isUniqueChars', () => {
    it('returns true when empty string is passed', () => {
        const str = [""];

        const result = isUniqueChars(str);

        expect(result).toBe(true);
    });

    it('returns true when string with single character is passed', () => {
        const str = ["a"];

        const result = isUniqueChars(str);

        expect(result).toBe(true);
    });

    it('returns true when string with unique characters are passed', () => {
        const str1 = ["a", "b", "c", "d"];
        const str2 = ["a", "b", "c", "d", " ", "e", "f", "g","h"];
        const str3 = ["a", "b", "c", "d", " ", "e", "f", "g", "h", "i", "j", "k", "l"];

        const result1 = isUniqueChars(str1);
        const result2 = isUniqueChars(str2);
        const result3 = isUniqueChars(str3);

        expect(result1).toBe(true);
        expect(result2).toBe(true);
        expect(result3).toBe(true);
    });

    it('returns false when string with duplicate characters are passed', () => {
        const str1 = ["a", "b", "c", "d", "a"];
        const str2 = ["a", "b", "c", "d", " ", "a", "b", "c"];
        const str3 = ["a", " ", "a"];

        const result1 = isUniqueChars(str1);
        const result2 = isUniqueChars(str2);
        const result3 = isUniqueChars(str3);

        expect(result1).toBe(false);
        expect(result2).toBe(false);
        expect(result3).toBe(false);
    });
});

describe('isUniqueCharsWithNoAdditionalDataStructure', () => {
    it('returns true when empty string is passed', () => {
        const str = [""];

        const result = isUniqueCharsWithNoAdditionalDataStructure(str);

        expect(result).toBe(true);
    });

    it('returns true when string with single character is passed', () => {
        const str = ["a"];

        const result = isUniqueCharsWithNoAdditionalDataStructure(str);

        expect(result).toBe(true);
    });

    it('returns true when string with unique characters are passed', () => {
        const str1 = ["a", "b", "c", "d"];
        const str2 = ["a", "b", "c", "d", " ", "e", "f", "g","h"];
        const str3 = ["a", "b", "c", "d", "e", "f", "g", "h", " ", "i", "j", "k", "l"];

        const result1 = isUniqueCharsWithNoAdditionalDataStructure(str1);
        const result2 = isUniqueCharsWithNoAdditionalDataStructure(str2);
        const result3 = isUniqueCharsWithNoAdditionalDataStructure(str3);

        expect(result1).toBe(true);
        expect(result2).toBe(true);
        expect(result3).toBe(true);
    });

    it('returns false when string with duplicate characters are passed', () => {
        const str1 = ["a", "b", "c", "d", "a"];
        const str2 = ["a", "b", "c", "d", " ", "a", "b", "c"];
        const str3 = ["a", " ", "a"];

        const result1 = isUniqueCharsWithNoAdditionalDataStructure(str1);
        const result2 = isUniqueCharsWithNoAdditionalDataStructure(str2);
        const result3 = isUniqueCharsWithNoAdditionalDataStructure(str3);

        expect(result1).toBe(false);
        expect(result2).toBe(false);
        expect(result3).toBe(false);
    });
});
