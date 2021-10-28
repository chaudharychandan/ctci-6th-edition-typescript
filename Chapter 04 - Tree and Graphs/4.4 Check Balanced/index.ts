import { TreeNode } from "data-structures/binary-search-tree";

const MIN_VALUE = -Infinity;

/**
 * Determines if binary tree is balanced
 *
 * Time Complexity: O(N)
 * Space Complexity: O(H)
 *
 * @param root - root node of the tree
 *
 * @returns `true` if the binary tree is balanced (which means that the
 * heights of the two subtrees of any node never differ by more than one), otherwise `false`
 */
export function isBalanced(root: TreeNode|null): boolean {
    return checkHeight(root) !== MIN_VALUE;
}

function checkHeight(root: TreeNode|null): number {
    if (root === null) return -1;

    const leftHeight = checkHeight(root.left);
    if (leftHeight === MIN_VALUE) return leftHeight;

    const rightHeight = checkHeight(root.right);
    if (rightHeight === MIN_VALUE) return rightHeight;

    const heightDiff = leftHeight - rightHeight;
    if (Math.max(heightDiff) > 1) {
        return MIN_VALUE;
    } else {
        return Math.max(leftHeight, rightHeight) + 1;
    }
}
