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

export class TreeNode {
    value: number;
    left: TreeNode | null;
    right: TreeNode | null;
    parent: TreeNode | null;

    constructor(value: number, parent?: TreeNode, left?: TreeNode, right?: TreeNode) {
        this.value = value;
        this.parent = parent || null;
        this.left = left || null;
        this.right = right || null;
    }
}

export class BST {
    root: TreeNode | null;

    constructor() {
        this.root = null;
    }

    insert(value: number, root: TreeNode | null = this.root): TreeNode {
        if (!root) {
            this.root = new TreeNode(value);
            return this.root;
        }

        if (value <= root.value) {
            if (root.left === null) {
                root.left = new TreeNode(value, root);
                return root.left;
            } else {
                return this.insert(value, root.left);
            }
        } else {
            if (root.right === null) {
                root.right = new TreeNode(value, root);
                return root.right;
            } else {
                return this.insert(value, root.right);
            }
        }
    }
}
