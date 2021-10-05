/**
 * Returns boolean by determining uniqueness of all the characters inside a string
 *
 * Time complexity: O(N)
 * Space complexity: O(N)
 *
 * @param str - The input string (array of single strings)
 * @returns `true` if the string has all unique characters otherwise `false`
 */
export function isUnique(str: string[]): boolean {
    if (str.length <= 1) return true;

    const charMap = new Map();

    for (const char of str) {
        if (char.trim()) {
            if(charMap.get(char) === true) return false;

            charMap.set(char, true);
        }
    }

    return true;
}

/**
 * Returns boolean by determining uniqueness of all the characters inside a string
 *
 * Time complexity: O(NlogN)
 * Space complexity: O(1)
 *
 * @param str - The input string (array of single strings)
 * @returns `true` if the string has all unique characters otherwise `false`
 */
export function isUniqueWithNoAdditionalDataStructure(str: string[]): boolean {
    if (str.length <= 1) return true;

    str.sort();

    for (let i=1; i<str.length; i++) {
        const currChar = str[i].trim();
        const prevChar = str[i-1].trim();

        if (currChar && prevChar && currChar === prevChar) return false;
    }

    return true;
}
