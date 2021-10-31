import { TreeNode } from "data-structures/binary-search-tree";
import { TreeNode as TreeNodeV2 } from "data-structures/binary-search-tree-v2";

/**
 * Returns the common ancestor (with links to parents)
 *
 * Time complexity: O(N)
 * Space complexity: O(1)
 *
 * @param node1 a node of the tree
 * @param node2 another node of the tree
 * @returns the first common ancestor node of the the two nodes
 */
export function findFirstCommonAncestor(node1: TreeNodeV2, node2: TreeNodeV2): TreeNodeV2|null {
    const delta = depth(node1) - depth(node2);

    let first: TreeNodeV2|null = delta > 0 ? node1 : node2;
    let second: TreeNodeV2|null = delta < 0 ? node2 : node1;

    second = goUpBy(second, delta);

    while (first !== null && second !== null && first !== second) {
        first = first.parent;
        second = second.parent;
    }

    return first === null || second === null ? null : first;
}

function goUpBy(node: TreeNodeV2, delta: number): TreeNodeV2|null {
    let curr: TreeNodeV2|null = node;
    while (delta > 0 && curr !== null) {
        curr = curr.parent;
        delta--;
    }

    return curr;
}

function depth(node: TreeNodeV2) {
    let length = 0;
    let curr: TreeNodeV2|null = node;

    while (curr !== null) {
        curr = curr.parent;
        length++;
    }

    return length;
}

/**
 * Returns the common ancestor (without links to parents)
 *
 * Time complexity: O(N)
 * Space complexity: O(1)
 *
 * @param root - root node of the tree
 * @param node1 - a node of the tree
 * @param node2 - another node of the tree
 * @returns the first common ancestor node of the the two nodes
 */
export function commonAncestor(root: TreeNode|null, p: TreeNode, q: TreeNode): TreeNode|null {
    if (!covers(root, p) || !covers(root, q)) return null;

    return ancestorHelper(root, p, q);
}

function ancestorHelper(root: TreeNode|null, p: TreeNode, q: TreeNode): TreeNode|null {
    if (root === null || root === p || root === q) {
        return root;
    }

    const pIsOnLeft = covers(root.left, p);
    const qIsOnLeft = covers(root.left, q);

    if (pIsOnLeft !== qIsOnLeft) {
        return root;
    }

    const childSide = pIsOnLeft ? root.left : root.right;

    return ancestorHelper(childSide, p, q);
}

function covers(root: TreeNode|null, p: TreeNode): boolean {
    if (root === null) return false;
    if (root === p) return true;

    return covers(root.left, p) || covers(root.right, p);
}
