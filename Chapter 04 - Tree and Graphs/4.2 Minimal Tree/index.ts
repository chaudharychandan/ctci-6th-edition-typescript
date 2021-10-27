import { BST, TreeNode } from "data-structures/binary-search-tree";

/**
 * Creates a BST with minimal height
 *
 * Time Complexity O(N)
 * Space Complexity O(1)
 *
 * @param list - sorted array with unique numbers
 * @returns root node of the bst
 */
export function createMinimalBST(list: number[]): BST {
    const bst = new BST();
    bst.root = createMinimalBSTNode(list, 0, list.length-1);

    return bst;
}

function createMinimalBSTNode(list: number[], start: number, end: number): TreeNode|null {
    if (end < start) {
        return null;
    }

    const mid = Math.floor((start + end)/2);
    const treeNode = new TreeNode(list[mid]);
    treeNode.left = createMinimalBSTNode(list, start, mid-1);
    treeNode.right = createMinimalBSTNode(list, mid+1, end);

    return treeNode;
}
