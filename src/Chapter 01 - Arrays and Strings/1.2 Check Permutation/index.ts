/**
 * Determines if one string is permutation of other
 *
 * Time Complexity: O(M+N)
 * Space Complexity: O(1): An array of size: 256
 *
 * @param str1 - The first input string
 * @param str2 - The second input string
 * @returns `true` if one is permutation of another, otherwise `false`
 */
export function checkPermutation(str1: string, str2: string): boolean {
    if (str1.trim() === str2.trim()) return true;

    const list = new Array(256).fill(0);

    for (let ch of str1) {
        ch = ch.trim();
        if (ch) {
            const charCode = ch.charCodeAt(0);
            list[charCode] += 1;
        }
    }

    for (let ch of str2) {
        ch = ch.trim();
        if (ch) {
            const charCode = ch.charCodeAt(0);
            list[charCode] -= 1;
            if (list[charCode] < 0) {
                return false;
            }
        }
    }

    for (const count of list) {
        if (count !== 0) return false;
    }

    return true;
}
