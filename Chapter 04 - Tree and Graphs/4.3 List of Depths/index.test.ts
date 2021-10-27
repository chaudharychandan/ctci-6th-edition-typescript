import { BST } from 'data-structures/binary-search-tree';
import { LinkedList } from 'data-structures/singly-linked-list';
import { areLinkedListsSimilar } from 'utils';
import { createLevelLinkedList } from '.';

describe('createLevelLinkedList', () => {
    it('returns a map of height and linked list of nodes at the level', () => {
        const bst = new BST();

        const node10 = bst.insert(10);
        const node5 = bst.insert(5);
        const node2 = bst.insert(2);
        const node7 = bst.insert(7);
        const node15 = bst.insert(15);
        const node12 = bst.insert(12);
        const node17 = bst.insert(17);

        const map = createLevelLinkedList(bst.root);
        const ll1 = new LinkedList();
        const ll2 = new LinkedList();
        const ll3 = new LinkedList();

        ll1.addNodeAtEnd(node10);

        ll2.addNodeAtEnd(node5);
        ll2.addNodeAtEnd(node15);

        ll3.addNodeAtEnd(node2);
        ll3.addNodeAtEnd(node7);
        ll3.addNodeAtEnd(node12);
        ll3.addNodeAtEnd(node17);

        const ll1Result = map.get(1);
        const ll2Result = map.get(2);
        const ll3Result = map.get(3);

        expect(areLinkedListsSimilar(ll1.head, ll1Result?.head || null)).toBe(true);
        expect(areLinkedListsSimilar(ll2.head, ll2Result?.head || null)).toBe(true);
        expect(areLinkedListsSimilar(ll3.head, ll3Result?.head || null)).toBe(true);

    });
});
