/**
 * Replaces all spaces with `%20` characters inside a string
 *
 * Time complexity: O(N)
 * Space complexity: O(1)
 *
 * @param str - The input string with extra length to accomodate the space covered by `%20`
 * @param size - true size of the string (actual string without extra length at the end)
 * @returns nothing, In place operation
 */
export function replaceSpaces(str: string[], size: number): string[] {
    if (size === 0) return str;
    let j = str.length-1;

    for (let i = size-1; i >= 0; i--) {
        const char = str[i];
        if (char === " ") {
            str[j--] = "0";
            str[j--] = "2";
            str[j--] = "%";
        } else {
            str[j] = char;
            j--;
        }
    }

    return str;
}
