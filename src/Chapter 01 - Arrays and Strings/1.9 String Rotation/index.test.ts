import {
    isRotation
} from '.';

describe('isRotation', () => {
    it('returns `false` if str1 & str2 are not of same length', () => {
        const str1 = "bottle";
        const str2 = "waterbottle";

        const result = isRotation(str1, str2);

        expect(result).toBe(false);
    });

    it('returns `true` if str1 & str2 are same', () => {
        const str1 = "waterbottle";
        const str2 = "waterbottle";

        const result = isRotation(str1, str2);

        expect(result).toBe(true);
    });

    it('returns `true` when str2 is rotation of str1', () => {
        const str1 = "waterbottle";
        const str2 = "erbottlewat";

        const result = isRotation(str1, str2);

        expect(result).toBe(true);
    });

    it('returns `false` when str2 is not a rotation of str1', () => {
        const str1 = "waterbottle";
        const str2 = "erbottwatle";

        const result = isRotation(str1, str2);

        expect(result).toBe(false);
    });
});
