/**
 * Compare equality of two strings
 *
 * @param str1 One input string
 * @param str2 Another input string
 * @returns `true` if both strings are equal, otherwise `false`
 */
 export function areStringsEqual(str1: string[], str2: string[]): boolean {
    if (str1.length !== str2.length) return false;

    for (let i = 0; i < str1.length; i++) {
        const char = str1[i];
        const expectedChar = str2[i];
        if (char !== expectedChar) return false;
    }

    return true;
}
