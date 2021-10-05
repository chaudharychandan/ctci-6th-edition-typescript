import {
    isUnique,
    isUniqueWithNoAdditionalDataStructure
} from '.';

describe('isUnique', () => {
    it('returns true when empty string is passed', () => {
        const str = [""];

        const result = isUnique(str);

        expect(result).toBe(true);
    });

    it('returns true when string with single character is passed', () => {
        const str = ["a"];

        const result = isUnique(str);

        expect(result).toBe(true);
    });

    it('returns true when string with unique characters are passed', () => {
        const str1 = ["a", "b", "c", "d"];
        const str2 = ["a", "b", "c", "d", " ", "e", "f", "g","h"];
        const str3 = ["a", "b", "c", "d", " ", "e", "f", "g", "h", " ", "i", "j", "k", "l"];

        const result1 = isUnique(str1);
        const result2 = isUnique(str2);
        const result3 = isUnique(str3);

        expect(result1).toBe(true);
        expect(result2).toBe(true);
        expect(result3).toBe(true);
    });

    it('returns false when string with duplicate characters are passed', () => {
        const str1 = ["a", "b", "c", "d", "a"];
        const str2 = ["a", "b", "c", "d", " ", "a", "b", "c"];
        const str3 = ["a", " ", "a"];

        const result1 = isUnique(str1);
        const result2 = isUnique(str2);
        const result3 = isUnique(str3);

        expect(result1).toBe(false);
        expect(result2).toBe(false);
        expect(result3).toBe(false);
    });
});

describe('isUniqueWithNoAdditionalDataStructure', () => {
    it('returns true when empty string is passed', () => {
        const str = [""];

        const result = isUniqueWithNoAdditionalDataStructure(str);

        expect(result).toBe(true);
    });

    it('returns true when string with single character is passed', () => {
        const str = ["a"];

        const result = isUniqueWithNoAdditionalDataStructure(str);

        expect(result).toBe(true);
    });

    it('returns true when string with unique characters are passed', () => {
        const str1 = ["a", "b", "c", "d"];
        const str2 = ["a", "b", "c", "d", " ", "e", "f", "g","h"];
        const str3 = ["a", "b", "c", "d", " ", "e", "f", "g", "h", " ", "i", "j", "k", "l"];

        const result1 = isUniqueWithNoAdditionalDataStructure(str1);
        const result2 = isUniqueWithNoAdditionalDataStructure(str2);
        const result3 = isUniqueWithNoAdditionalDataStructure(str3);

        expect(result1).toBe(true);
        expect(result2).toBe(true);
        expect(result3).toBe(true);
    });

    it('returns false when string with duplicate characters are passed', () => {
        const str1 = ["a", "b", "c", "d", "a"];
        const str2 = ["a", "b", "c", "d", " ", "a", "b", "c"];
        const str3 = ["a", " ", "a"];

        const result1 = isUniqueWithNoAdditionalDataStructure(str1);
        const result2 = isUniqueWithNoAdditionalDataStructure(str2);
        const result3 = isUniqueWithNoAdditionalDataStructure(str3);

        expect(result1).toBe(false);
        expect(result2).toBe(false);
        expect(result3).toBe(false);
    });
});
