import { LinkedList, LinkedListNode } from "data-structures/singly-linked-list";
import { intersection } from ".";

describe('intersection', () => {
    it('returns `null` when at least one of the linked list has no elements', () => {
        const ll1 = new LinkedList<number>();
        ll1.addNodeAtStart(1);
        const ll2 = new LinkedList<number>();

        const result = intersection(ll1.head, ll2.head);

        expect(result).toBe(null);
    });

    it('returns the head node if the starting node is same', () => {
        const ll1 = new LinkedList<number>();
        ll1.addNodesAtEnd([1, 2, 3, 4, 5, 6]);

        const result = intersection(ll1.head, ll1.head);

        expect(result).toBe(ll1.head);
    });

    it('returns `null` when there is not an intersecting node', () => {
        const ll1 = new LinkedList<number>();
        ll1.addNodesAtEnd([1, 2, 3, 4, 5]);
        const ll2 = new LinkedList<number>();
        ll2.addNodesAtEnd([3, 2, 3, 2, 8, 10, 7]);

        const result = intersection(ll1.head, ll2.head);

        expect(result).toBe(null);
    });

    it('returns the intersecting node', () => {
        const ll1 = new LinkedList<number>();
        ll1.addNodesAtEnd([1, 2, 3]);
        const ll2 = new LinkedList<number>();
        ll2.addNodesAtEnd([3, 2, 3, 2, 8]);

        const node1 = new LinkedListNode(10);
        const node2 = new LinkedListNode(20);

        if (ll1.tail && ll2.tail) {
            ll1.tail.next = node1;
            ll1.tail = node1;
            ll1.tail.next = node2;
            ll1.tail = node2;

            ll2.tail.next = node1;
            ll2.tail = node1;
            ll2.tail.next = node2;
            ll2.tail = node2;
        }

        const result = intersection(ll1.head, ll2.head);

        expect(result).toBe(node1);
    });
});
