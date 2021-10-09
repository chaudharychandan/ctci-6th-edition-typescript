import { LinkedList } from "data-structures/singly-linked-list";
import { partition } from ".";
import { areLinkedListsSimilar } from 'utils';

describe('partition', () => {
    it('ignores when linked list is empty', () => {
        const ll = new LinkedList<number>();
        const x = 5;
        partition(ll.head, x);

        expect(ll.head === null).toBe(true);
    });

    it('ignores when linked list has single node', () => {
        const ll1 = new LinkedList<number>();
        ll1.add(10);

        const ll2 = new LinkedList<number>();
        ll2.add(10);

        const x = 5;

        partition(ll1.head, x);

        expect(areLinkedListsSimilar(ll1.head, ll2.head)).toBe(true);
    });

    it('move all the nodes with value less than x before all the nodes with value greater than or equal to x', () => {
        const ll1 = new LinkedList<number>();
        ll1.add(3);
        ll1.add(5);
        ll1.add(8);
        ll1.add(5);
        ll1.add(10);
        ll1.add(2);
        ll1.add(1);

        const x = 5;

        partition(ll1.head, x);

        let curr = ll1.head;
        let count = 0;

        while(curr?.data && curr.data < 5) {
            count++;
            curr = curr.next;
        }

        expect(count).toBe(3);
    });
});
