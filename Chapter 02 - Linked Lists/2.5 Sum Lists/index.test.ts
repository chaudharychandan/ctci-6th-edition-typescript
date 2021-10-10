import { LinkedList } from "data-structures/singly-linked-list";
import { areLinkedListsSimilar } from "utils";
import { sumLists } from ".";

describe('sumLists', () => {
    it('returns one when other is empty', () => {
        const ll1 = new LinkedList<number>();
        const ll2 = new LinkedList<number>();
        ll1.addNodesAtEnd([7, 1, 6]);

        const result = sumLists(ll1.head, ll2.head);

        expect(result).toBe(ll1.head);
    });

    it('adds two linked list node values and returns a new list when number of digits are same', () => {
        const ll1 = new LinkedList<number>();
        const ll2 = new LinkedList<number>();
        ll1.addNodesAtEnd([7, 1, 6]);
        ll2.addNodesAtEnd([5, 9, 2]);

        const result = sumLists(ll1.head, ll2.head);

        const ll3 = new LinkedList<number>();
        ll3.addNodesAtEnd([2, 1, 9]);

        expect(areLinkedListsSimilar(result, ll3.head)).toBe(true);
    });

    it('adds two linked list node values and returns a new list when number of digits are different', () => {
        const ll1 = new LinkedList<number>();
        const ll2 = new LinkedList<number>();
        ll1.addNodesAtEnd([7, 1, 6, 8, 9]);
        ll2.addNodesAtEnd([5, 9, 2, 2]);

        const result = sumLists(ll1.head, ll2.head);

        const ll3 = new LinkedList<number>();
        ll3.addNodesAtEnd([2, 1, 9, 0, 0, 1]);

        expect(areLinkedListsSimilar(result, ll3.head)).toBe(true);
    });
});
