import { BST, TreeNode } from 'data-structures/binary-search-tree';
import { validateBST } from '.';

describe('validateBST', () => {
    let bst: BST;
    let node: TreeNode;

    beforeEach(() => {
        bst = new BST();
        bst.insert(10);
        bst.insert(5);
        bst.insert(15);
        bst.insert(2);
        bst.insert(7);
        bst.insert(12);
        bst.insert(17);
        bst.insert(3);
        bst.insert(6);
        node = bst.insert(8);
    });

    it('returns `true` if BST is valid', () => {
        expect(validateBST(bst.root)).toBe(true);
    });

    it('returns `false` if BST is invalid', () => {
        node.value = 11;
        expect(validateBST(bst.root)).toBe(false);
    });
});
