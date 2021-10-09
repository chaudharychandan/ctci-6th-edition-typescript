import { LinkedList } from "data-structures/singly-linked-list";
import { kthToLast } from ".";

describe('kthToLast', () => {
    it('returns `null` when linked list is empty', () => {
        const ll = new LinkedList<number>();

        const k = 3;

        const data = kthToLast<number>(ll.head, k);

        expect(data).toBe(null);
    });

    it('returns `null` when k is greater than the number of nodes in the list', () => {
        const ll = new LinkedList<number>();
        ll.addNodesAtEnd([1, 2]);

        const k = 3;

        const data = kthToLast<number>(ll.head, k);

        expect(data).toBe(null);
    });

    it('returns `null` when k is less than 1', () => {
        const ll = new LinkedList<number>();
        ll.addNodesAtEnd([1, 2]);

        const k = 0;

        const data = kthToLast<number>(ll.head, k);

        expect(data).toBe(null);
    });

    it('returns 3rd node from last', () => {
        const ll = new LinkedList<number>();
        ll.addNodesAtEnd([1, 2, 3, 4, 5, 6, 7, 8]);

        const k = 3;

        const data = kthToLast<number>(ll.head, k);

        expect(data).toBe(6);
    });
});
