import { Queue } from "./queue";

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

    calculateHeight(): number {
        const nodesInLevel = new Queue<TreeNode>();
        let height = 0;

        if (this.root === null) return 0;

        nodesInLevel.add(this.root);

        while(!nodesInLevel.isEmpty()) {
            height++;
            let nodeCount = nodesInLevel.size();

            while(nodeCount--) {
                const currentNode = nodesInLevel.peek();

                if (currentNode?.left) {
                    nodesInLevel.add(currentNode.left);
                }

                if (currentNode?.right) {
                    nodesInLevel.add(currentNode.right);
                }

                nodesInLevel.remove();
            }
        }

        return height;
    }
}
