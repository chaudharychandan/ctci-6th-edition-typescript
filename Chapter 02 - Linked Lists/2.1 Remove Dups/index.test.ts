import { deleteDups, deleteDupsWithNoBuffer } from '.';
import { LinkedList } from 'data-structures/singly-linked-list';
import { areLinkedListsSimilar } from 'utils';

describe('deleteDups', () => {
    it('ignores when head is null', () => {
        const ll = new LinkedList<number>();

        deleteDups<number>(ll.head);

        expect(ll.head).toBe(null);
    });

    it('ignores when there is only one node in linked list', () => {
        const ll1 = new LinkedList<number>();
        ll1.addNodeAtEnd(10);

        const ll2 = new LinkedList<number>();
        ll2.addNodeAtEnd(10);

        deleteDups<number>(ll1.head);
        const result = areLinkedListsSimilar(ll1.head, ll2.head);

        expect(result).toBe(true);
    });

    it('removes one duplicate node out of two', () => {
        const ll1 = new LinkedList<number>();
        ll1.addNodesAtEnd([10, 10]);

        const ll2 = new LinkedList<number>();
        ll2.addNodeAtEnd(10);

        deleteDups<number>(ll1.head);
        const result = areLinkedListsSimilar(ll1.head, ll2.head);

        expect(result).toBe(true);
    });

    it('removes duplicate nodes', () => {
        const ll1 = new LinkedList<number>();
        ll1.addNodesAtEnd([1, 2, 2, 3, 1, 4, 3, 5, 6]);

        const ll2 = new LinkedList<number>();
        ll2.addNodesAtEnd([1, 2, 3, 4, 5, 6]);

        deleteDups<number>(ll1.head);
        const result = areLinkedListsSimilar(ll1.head, ll2.head);

        expect(result).toBe(true);
    });
});

describe('deleteDupsWithNoBuffer', () => {
    it('ignores when head is null', () => {
        const ll = new LinkedList<number>();

        deleteDupsWithNoBuffer(ll.head);

        expect(ll.head).toBe(null);
    });

    it('ignores when there is only one node in linked list', () => {
        const ll1 = new LinkedList<number>();
        ll1.addNodeAtEnd(10);

        const ll2 = new LinkedList<number>();
        ll2.addNodeAtEnd(10);

        deleteDupsWithNoBuffer(ll1.head);
        const result = areLinkedListsSimilar(ll1.head, ll2.head);

        expect(result).toBe(true);
    });

    it('removes one duplicate node out of two', () => {
        const ll1 = new LinkedList<number>();
        ll1.addNodesAtEnd([10, 10]);

        const ll2 = new LinkedList<number>();
        ll2.addNodeAtEnd(10);

        deleteDupsWithNoBuffer(ll1.head);
        const result = areLinkedListsSimilar(ll1.head, ll2.head);

        expect(result).toBe(true);
    });

    it('removes duplicate nodes', () => {
        const ll1 = new LinkedList<number>();
        ll1.addNodesAtEnd([1, 2, 2, 3, 1, 4, 3, 5, 6]);

        const ll2 = new LinkedList<number>();
        ll2.addNodesAtEnd([1, 2, 3, 4, 5, 6]);

        deleteDupsWithNoBuffer(ll1.head);
        const result = areLinkedListsSimilar(ll1.head, ll2.head);

        expect(result).toBe(true);
    });
});
