import {
    oneEditWay
} from '.';

describe('oneEditWay', () => {
    it('returns `true` when both strings are empty', () => {
        const str1 = "";
        const str2 = "";

        const result = oneEditWay(str1, str2);

        expect(result).toBe(true);
    });

    it('returns `true` when strings are equal', () => {
        const str1 = "pale";
        const str2 = "pale";

        const result = oneEditWay(str1, str2);

        expect(result).toBe(true);
    });

    it('returns `true` when one string can be obtained by adding a character to another', () => {
        const str1 = "pale";
        const str2 = "ple";

        const result = oneEditWay(str1, str2);

        expect(result).toBe(true);
    });

    it('returns `true` when one string can be obtained by removing a character from another', () => {
        const str1 = "pales";
        const str2 = "pale";

        const result = oneEditWay(str1, str2);

        expect(result).toBe(true);
    });

    it('returns `true` when one string can be obtained by replacing a character from another', () => {
        const str1 = "bale";
        const str2 = "pale";

        const result = oneEditWay(str1, str2);

        expect(result).toBe(true);
    });

    it('returns `false` when one string can not be obtained by replacing, deleting or adding a character to/from another', () => {
        const str1 = "pale";
        const str2 = "bake";

        const result = oneEditWay(str1, str2);

        expect(result).toBe(false);
    });
});
