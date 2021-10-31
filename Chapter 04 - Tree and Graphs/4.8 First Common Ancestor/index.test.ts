import { BST, TreeNode } from 'data-structures/binary-search-tree-v2';
import { findFirstCommonAncestor, commonAncestor } from ".";

describe('findFirstCommonAncestor', () => {
    let bst: BST;
    let node2: TreeNode;
    let node8: TreeNode;
    let node10: TreeNode;

    beforeEach(() => {
        bst = new BST();
        bst.insert(10);
        node2 = bst.insert(5);
        bst.insert(15);
        bst.insert(2);
        bst.insert(7);
        bst.insert(12);
        bst.insert(17);
        node8 = bst.insert(3);
        bst.insert(6);
        node10 = bst.insert(9);
    });

    it ('returns the first common ancestor', () => {
        const result = findFirstCommonAncestor(node8, node10);

        expect(result).toBe(node2);
    });

    it ('returns the node when both nodes are same', () => {
        const result = findFirstCommonAncestor(node8, node8);

        expect(result).toBe(node8);
    });
});

describe('commonAncestor', () => {
    let bst: BST;
    let node2: TreeNode;
    let node8: TreeNode;
    let node10: TreeNode;

    beforeEach(() => {
        bst = new BST();
        bst.insert(10);
        node2 = bst.insert(5);
        bst.insert(15);
        bst.insert(2);
        bst.insert(7);
        bst.insert(12);
        bst.insert(17);
        node8 = bst.insert(3);
        bst.insert(6);
        node10 = bst.insert(9);
    });

    it ('returns the first common ancestor', () => {
        const result = commonAncestor(bst.root, node8, node10);

        expect(result).toBe(node2);
    });

    it ('returns the node when both nodes are same', () => {
        const result = commonAncestor(bst.root, node8, node8);

        expect(result).toBe(node8);
    });
});