import { LinkedList } from "data-structures/singly-linked-list";
import { isPalindrome } from ".";

describe('isPalindrome', () => {
    it('returns `true` when linked list is empty', () => {
        const ll = new LinkedList<number>();

        const result = isPalindrome(ll.head);

        expect(result).toBe(true);
    });

    it('returns `true` when linked list has one node', () => {
        const ll = new LinkedList<number>();
        ll.addNodeAtEnd(1);

        const result = isPalindrome(ll.head);

        expect(result).toBe(true);
    });

    it('returns `true` when linked list is a palindrome', () => {
        const ll = new LinkedList<number>();
        ll.addNodesAtEnd([1,2,3,4,3,2,1]);

        const result = isPalindrome(ll.head);

        expect(result).toBe(true);
    });

    it('returns `false` when linked list is not a palindrome', () => {
        const ll = new LinkedList<number>();
        ll.addNodesAtEnd([1,2,3,4,2,1]);

        const result = isPalindrome(ll.head);

        expect(result).toBe(false);
    });
});
