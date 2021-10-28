import { isBalanced } from ".";
import { BST } from 'data-structures/binary-search-tree';

describe('isBalanced', () => {
    it('returns `true` when tree is balanced', () => {
        const bst = new BST();
        bst.insert(10);
        bst.insert(5);
        bst.insert(2);
        bst.insert(7);
        bst.insert(1);
        bst.insert(3);
        bst.insert(6);
        bst.insert(15);
        bst.insert(12);
        bst.insert(17);

        expect(isBalanced(bst.root)).toBe(true);
    });

    it('returns `false` when tree is balanced', () => {
        const bst = new BST();
        bst.insert(10);
        bst.insert(5);
        bst.insert(2);
        bst.insert(7);
        bst.insert(1);
        bst.insert(3);
        bst.insert(6);
        bst.insert(15);

        expect(isBalanced(bst.root)).toBe(false);
    });
});
