/**
 * Determines if the string has palindrome permutation
 *
 * Time complexity: O(N)
 * Space complexity: O(1)
 *
 * @param str The input string
 * @returns `true` if the string has a permutation which is a palidrome, otherwise `false`
 */
export function isPalindroneOfPermutation(str: string): boolean {
    if (str.length <= 1) return true;

    let countOdd = 0;
    const charFreq = Array.from({ length: 26 }, () => 0);
    const charCodeA = "a".charCodeAt(0);


    for (const ch of str) {
        const charCode = ch.toLowerCase().charCodeAt(0) - charCodeA;

        if (charCode >= 0 && charCode <= 25) {
            charFreq[charCode] += 1;

            if (charFreq[charCode] % 2 === 1) {
                countOdd++;
            } else {
                countOdd--;
            }
        }
    }

    return countOdd <= 1;
}
