/**
 * Determines if one string is permutation of other
 *
 * Time Complexity: O(M+N)
 * Space Complexity: O(1): An array of size: 128
 *
 * @param str1 - The first input string
 * @param str2 - The second input string
 * @returns `true` if one is permutation of another, otherwise `false`
 */
export function checkPermutation(str1: string[], str2: string[]): boolean {
    if (str1 === str2) return true;
    if (str1.length !== str2.length) return false;

    const list = new Array(128).fill(0); // ASCII characters

    for (let ch of str1) {
        const charCode = ch.charCodeAt(0);
        list[charCode] += 1;
    }

    for (let ch of str2) {
        const charCode = ch.charCodeAt(0);
        list[charCode] -= 1;
        if (list[charCode] < 0) {
            return false;
        }
    }

    return true;
}

/**
 * Determines if one string is permutation of other without using any extra data structure
 *
 * Time Complexity: O(NlogN + MLogM)
 * Space Complexity: O(1)
 *
 * @param str1 - The first input string
 * @param str2 - The second input string
 * @returns `true` if one is permutation of another, otherwise `false`
 */
 export function checkPermutationWithNoExtraDataStructure(str1: string[], str2: string[]): boolean {
    if (str1 === str2) return true;
    if (str1.length !== str2.length) return false;

    // in place sorting
    str1.sort();
    str2.sort();

    for (let i = 0; i < str1.length; i++) {
        const ch1 = str1[i];
        const ch2 = str2[i];

        if (ch1 !== ch2) return false;
    }

    return true;
}
