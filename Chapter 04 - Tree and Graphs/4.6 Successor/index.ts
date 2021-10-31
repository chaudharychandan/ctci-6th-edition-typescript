import { TreeNode } from "data-structures/binary-search-tree-v2";

/**
 * Finds out the successor of a node inside BST
 *
 * Time complexity: O(N)
 * Space complexity: O(1)
 *
 * @param node - the node whose successor needs to be returned
 * @returns the successor node
 */
export function findSuccessor (node: TreeNode | null): TreeNode | null {
    if (node === null) return null;

    if (node.right) {
        return leftMostChild(node.right);
    }

    while (true) {
        if (node.parent) {
            if (node.parent.left === node) {
                return node.parent;
            } else {
                node = node.parent;
            }
        } else {
            return null;
        }
    }
}

function leftMostChild (node: TreeNode) {
    while (node.left) {
        node = node.left;
    }

    return node;
}
