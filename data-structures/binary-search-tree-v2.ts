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

// BST with reference to parent node
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
