import { BST, TreeNode, findSuccessor } from '.';

describe('findSuccessor', () => {
    let bst: BST;
    let node2: TreeNode;
    let node3: TreeNode;
    let node5: TreeNode;
    let node6: TreeNode;
    let node7: TreeNode;
    let node9: TreeNode;
    let node10: TreeNode;

    beforeEach(() => {
        bst = new BST();
        bst.insert(10);
        node2 = bst.insert(5);
        node3 = bst.insert(15);
        bst.insert(2);
        node5 = bst.insert(7);
        node6 = bst.insert(12);
        node7 = bst.insert(17);
        bst.insert(3);
        node9 = bst.insert(6);
        node10 = bst.insert(9);
    });

    it('returns left most node of the right child', () => {
        const successor = findSuccessor(node2);

        expect(successor).toBe(node9);
    });

    it('returns right child if it is a leaf node', () => {
        const successor = findSuccessor(node5);

        expect(successor).toBe(node10);
    });

    it('returns the parent node of a left subtree when the node is leaf of the left subtree', () => {
        const successor = findSuccessor(node10);

        expect(successor).toBe(bst.root);
    });

    it('returns parent when node is the left child of parent and no right child of the node', () => {
        const successor = findSuccessor(node6);

        expect(successor).toBe(node3);
    });

    it('returns `null` when no successor available', () => {
        const successor = findSuccessor(node7);

        expect(successor).toBe(null);
    });
});
