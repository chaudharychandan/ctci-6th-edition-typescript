import { createMinimalBST } from '.';

describe('createMinimalBST', () => {
    it('create BST with height of logN + 1', () => {
        const list = [5, 8, 12, 15, 23, 29, 34, 36, 40, 47, 51, 57, 59, 60, 72, 79];
        const bst = createMinimalBST(list);

        const height = bst.calculateHeight();

        expect(height).toBe(5);
    });
});
