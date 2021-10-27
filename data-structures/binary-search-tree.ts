export class TreeNode {
    value: number;
    left: TreeNode|null;
    right: TreeNode|null;

    constructor(value: number, left?: TreeNode, right?: TreeNode) {
        this.value = value;
        this.left = left || null;
        this.right = right || null;
    }
}

export class BST {
    root: TreeNode|null;

    constructor() {
        this.root = null;
    }

    insert(value: number, root: TreeNode|null = this.root): void {
        if (!root) {
            this.root = new TreeNode(value);
            return;
        }

        if (value < root.value) {
            if (root.left === null) {
                root.left = new TreeNode(value);
            } else {
                this.insert(value, root.left);
            }
        } else {
            if (root.right === null) {
                root.right = new TreeNode(value);
            } else {
                this.insert(value, root.right);
            }
        }
    }
}
