import { LinkedList } from "data-structures/singly-linked-list";
import { findLoopBeginning } from ".";

describe('findLoopBeginning', () => {
    it('returns `null` when the linked list is empty', () => {
        const ll = new LinkedList<number>();

        const result = findLoopBeginning(ll.head);

        expect(result).toBe(null);
    });

    it('returns `null` when the linked list has single node', () => {
        const ll = new LinkedList<number>();
        ll.addNodeAtEnd(10);

        const result = findLoopBeginning(ll.head);

        expect(result).toBe(null);
    });

    it('returns `null` when the linked list has no loop', () => {
        const ll = new LinkedList<number>();
        ll.addNodesAtEnd([10, 20, 30, 40]);

        const result = findLoopBeginning(ll.head);

        expect(result).toBe(null);
    });

    it('returns the node at the beginning of the loop', () => {
        const ll = new LinkedList<number>();
        ll.addNodesAtEnd([1, 2, 3]);
        const node = ll.addNodeAtEnd(4);
        ll.addNodesAtEnd([5, 6, 7]);
        if (ll.tail) ll.tail.next = node;

        const result = findLoopBeginning(ll.head);

        expect(result).toBe(node);
    });
});
