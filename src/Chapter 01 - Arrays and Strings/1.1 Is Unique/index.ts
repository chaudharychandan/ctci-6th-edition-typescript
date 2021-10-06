/**
 * Determines the uniqueness of all the characters inside a string
 *
 * Time complexity: O(N)
 * Space complexity: O(1) - Size of the map will be limited since total number of ASCII characters is of length 128
 *
 * @param str - The input string (array of single strings)
 * @returns `true` if the string has all unique characters otherwise `false`
 */
export function isUniqueChars(str: string[]): boolean {
    if (str.length <= 1) return true;

    const charFreq = new Array(128);

    for (const char of str) {
        const charCode = char.charCodeAt(0);
        if(charFreq[charCode] === true) return false;
        charFreq[charCode] = true;
    }

    return true;
}

/**
 * Determines the uniqueness of all the characters inside a string
 *
 * Time complexity: O(NlogN)
 * Space complexity: O(1)
 *
 * @param str - The input string (array of single strings)
 * @returns `true` if the string has all unique characters otherwise `false`
 */
export function isUniqueCharsWithNoAdditionalDataStructure(str: string[]): boolean {
    if (str.length <= 1) return true;

    // in place sorting
    str.sort();

    for (let i=1; i<str.length; i++) {
        const currChar = str[i].trim();
        const prevChar = str[i-1].trim();

        if (currChar && prevChar && currChar === prevChar) return false;
    }

    return true;
}
