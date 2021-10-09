/**
 * Determines if two strings are one edit (or zero edits) away.
 *
 * Time complexity: O(N)
 * Space complexity: O(1)
 *
 * @param str1 One input string
 * @param str2 Another input string
 * @returns `true` if both strings are are one edit (or zero edits) away, otherwise `false`
 */
export function oneEditWay(str1: string, str2: string): boolean {
    if (str1 === str2) return true;

    if (str1.length === str2.length) {
        return oneEditReplace(str1, str2);
    } else if (str1.length + 1 === str2.length) {
        return oneEditInsert(str1, str2);
    } else if (str1.length === str2.length + 1) {
        return oneEditInsert(str2, str1);
    }

    return false;
}

/**
 * Determines if one string can be obtained by inserting a character in another one
 *
 * @param str1 One input string
 * @param str2 Another input string
 * @returns `true` if adding a character in str1 generates str2, otherwise `false`
 */
function oneEditInsert(str1: string, str2: string): boolean {
    let index1 = 0;
    let index2 = 0;

    while (index1 < str1.length && index2 < str2.length) {
        if (str1[index1] !== str2[index2]) {
            if (index1 !== index2) return false;
            index2++;
        } else {
            index1++;
            index2++;
        }
    }

    return true;
}

/**
 * Determines if one string can be obtained by replacing a character in another one
 *
 * @param str1 One input string
 * @param str2 Another input string
 * @returns `true` if replacing a character in str1 generates str2, otherwise `false`
 */
function oneEditReplace(str1: string, str2: string): boolean {
    let foundDifference = false;
    for (let i = 0; i < str1.length; i++) {
        if (str1[i] !== str2[i]) {
            if (foundDifference) return false;
            foundDifference = true;
        }
    }

    return true;
}
