import { LinkedList } from "data-structures/singly-linked-list";
import { areLinkedListsSimilar } from "utils";
import { deleteNode } from ".";

describe('deleteNode', () => {
    it('ignores when the node is `null`', () => {
        const ll1 = new LinkedList<number>();

        deleteNode<number>(ll1.head);

        expect(areLinkedListsSimilar(ll1.head, ll1.head)).toBe(true);
    });

    it('ignores when the node is the last node', () => {
        const ll1 = new LinkedList<number>();
        ll1.add(1);
        ll1.add(2);
        const node = ll1.add(3);

        deleteNode<number>(node);

        expect(areLinkedListsSimilar(ll1.head, ll1.head)).toBe(true);
    });

    it('deletes the nodedle node when linked list has odd nodes', () => {
        const ll1 = new LinkedList<number>();
        ll1.add(1);
        ll1.add(2);
        const node = ll1.add(3);
        ll1.add(4);
        ll1.add(5);

        const ll2 = new LinkedList<number>();
        ll2.add(1);
        ll2.add(2);
        ll2.add(4);
        ll2.add(5);

        deleteNode<number>(node);

        expect(areLinkedListsSimilar(ll1.head, ll2.head)).toBe(true);
    });

    it('deletes the nodedle node when linked list has even nodes', () => {
        const ll1 = new LinkedList<number>();
        const node = ll1.add(1);
        ll1.add(2);
        ll1.add(3);
        ll1.add(4);
        ll1.add(5);

        const ll2 = new LinkedList<number>();
        ll2.add(2);
        ll2.add(3);
        ll2.add(4);
        ll2.add(5);

        deleteNode<number>(node);

        expect(areLinkedListsSimilar(ll1.head, ll2.head)).toBe(true);
    });
});
