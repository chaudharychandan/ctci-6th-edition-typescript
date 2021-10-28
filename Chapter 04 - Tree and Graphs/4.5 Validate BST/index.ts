import { TreeNode } from "data-structures/binary-search-tree";

/**
 * Determines the validity of the BST (doesn't allow duplicate elements)
 *
 * Time complexity: O(N)
 * Space complexity: O(1)
 *
 * @param root - the root node of the BST
 * @returns return `true` if BST is valid, otherwise `false`
 */
export function validateBST(root: TreeNode|null): boolean {
    return checkBST(root, { value: null });
}

function checkBST (node: TreeNode|null, lastPrinted: { value: number|null }): boolean {
    if (node === null) return true;

    // left sub tree
    if (!checkBST(node.left, lastPrinted)) return false;

    if (lastPrinted.value !== null && node.value <= lastPrinted.value) {
        return false;
    }

    if (lastPrinted) {
        lastPrinted.value = node.value;
    } else {
        lastPrinted = { value: node.value };
    }

    // right sub tree
    if(!checkBST(node.right, lastPrinted)) return false;

    return true;
}

/**
 * Determines the validity of the BST (allows duplicate elements)
 *
 * Time complexity: O(N)
 * Space complexity: O(1)
 *
 * @param root - the root node of the BST
 * @returns return `true` if BST is valid, otherwise `false`
 */
export function validateBSTWithDuplicateElements(root: TreeNode|null): boolean {
    return checkBSTWithDuplicateElements(root, null, null);
}

function checkBSTWithDuplicateElements(node: TreeNode|null, min: number|null, max: number|null): boolean {
    if (node === null) return true;

    if ((min !== null && node.value <= min) || max !== null && node.value > max) {
        return false;
    }

    if (!checkBSTWithDuplicateElements(node.left, min, node.value) || !checkBSTWithDuplicateElements(node.right, node.value, max)) {
        return false;
    }

    return true;
}
