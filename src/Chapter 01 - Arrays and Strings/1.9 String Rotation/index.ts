/**
 * Determines if one string is a rotation of other
 *
 * Time complexity: O(N)
 * Space complexity: O(N)
 *
 * @param str1 One input string
 * @param str2 Other input string
 * @returns `true` if `str1` is a rotation of `str2`, otherwise `false`
 *
 * @example
 * str1 - `waterbottle`
 * str2 - `erbottlewat`
 *
 * str2 can be obtained by rotating str1 thrice
 */
export function isRotation(str1: string, str2: string): boolean {
    if (str1.length !== str2.length) return false;
    if (str1 === str2) return true;

    const str1str1  = str1 + str1;

    return str1str1.includes(str2);
}
