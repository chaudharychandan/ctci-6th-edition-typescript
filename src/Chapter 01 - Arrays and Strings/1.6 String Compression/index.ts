/**
 * Returns the compressed string
 *
 * Time complexity: O(N)
 * Space complexity: O(N)
 *
 * @param str The input string
 * @returns compressed string if the compressed string has length less than the input string, otherwise the input string else
 *
 * @example
 * Here's an example
 * input string: aabcccccaaa
 * expected output string: a2b1c5a3
 */
export function stringCompression(str: string): string {
    if (str.length <= 2) return str;

    let result = "";

    let i = 0;
    let j = 0;

    while (i < str.length) {
        const ch1 = str[i].toLowerCase();
        const ch2 = str[j].toLowerCase();

        if (result.length >= str.length) return str;

        if (ch1 === ch2) {
            i++;
        } else {
            result = result + `${ch2}${i-j}`;
            j = i;
        }
        if (i === str.length) {
            result = result + `${ch2}${i-j}`;
        }
    }

    return result;
}
