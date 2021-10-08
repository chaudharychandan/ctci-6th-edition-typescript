import { deleteDups, deleteDupsWithNoBuffer } from '.';
import { LinkedList } from 'data-structures/singly-linked-list';
import { areLinkedListsSimilar } from 'utils';

describe('deleteDups', () => {
    it('ignores when head is null', () => {
        const ll = new LinkedList();

        deleteDups(ll.head);

        expect(ll.head).toBe(null);
    });

    it('ignores when there is only one node in linked list', () => {
        const ll1 = new LinkedList();
        ll1.add(10);

        const ll2 = new LinkedList();
        ll2.add(10);

        deleteDups(ll1.head);
        const result = areLinkedListsSimilar(ll1.head, ll2.head);

        expect(result).toBe(true);
    });

    it('removes one duplicate node out of two', () => {
        const ll1 = new LinkedList();
        ll1.add(10);
        ll1.add(10);
        ll1.add(10);
        ll1.add(10);

        const ll2 = new LinkedList();
        ll2.add(10);

        deleteDups(ll1.head);
        const result = areLinkedListsSimilar(ll1.head, ll2.head);

        expect(result).toBe(true);
    });

    it('removes duplicate nodes', () => {
        const ll1 = new LinkedList();
        ll1.add(1);
        ll1.add(2);
        ll1.add(2);
        ll1.add(3);
        ll1.add(1);
        ll1.add(4);
        ll1.add(3);
        ll1.add(5);
        ll1.add(6);


        const ll2 = new LinkedList();
        ll2.add(1);
        ll2.add(2);
        ll2.add(3);
        ll2.add(4);
        ll2.add(5);
        ll2.add(6);

        deleteDups(ll1.head);
        const result = areLinkedListsSimilar(ll1.head, ll2.head);

        expect(result).toBe(true);
    });
});

describe('deleteDupsWithNoBuffer', () => {
    it('ignores when head is null', () => {
        const ll = new LinkedList();

        deleteDupsWithNoBuffer(ll.head);

        expect(ll.head).toBe(null);
    });

    it('ignores when there is only one node in linked list', () => {
        const ll1 = new LinkedList();
        ll1.add(10);

        const ll2 = new LinkedList();
        ll2.add(10);

        deleteDupsWithNoBuffer(ll1.head);
        const result = areLinkedListsSimilar(ll1.head, ll2.head);

        expect(result).toBe(true);
    });

    it('removes one duplicate node out of two', () => {
        const ll1 = new LinkedList();
        ll1.add(10);
        ll1.add(10);
        ll1.add(10);
        ll1.add(10);

        const ll2 = new LinkedList();
        ll2.add(10);

        deleteDupsWithNoBuffer(ll1.head);
        const result = areLinkedListsSimilar(ll1.head, ll2.head);

        expect(result).toBe(true);
    });

    it('removes duplicate nodes', () => {
        const ll1 = new LinkedList();
        ll1.add(1);
        ll1.add(2);
        ll1.add(2);
        ll1.add(3);
        ll1.add(1);
        ll1.add(4);
        ll1.add(3);
        ll1.add(5);
        ll1.add(6);


        const ll2 = new LinkedList();
        ll2.add(1);
        ll2.add(2);
        ll2.add(3);
        ll2.add(4);
        ll2.add(5);
        ll2.add(6);

        deleteDupsWithNoBuffer(ll1.head);
        const result = areLinkedListsSimilar(ll1.head, ll2.head);

        expect(result).toBe(true);
    });
});
