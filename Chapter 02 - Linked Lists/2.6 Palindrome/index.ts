import { LinkedList, LinkedListNode } from "data-structures/singly-linked-list";

/**
 * Determines if linked list is a palindrome
 *
 * Time complexity: O(N)
 * Space complexity: O(N)
 *
 * @param head - head node of the linked list
 * @returns `true` if linked list is palindrome, otherwise `false`
 */
export function isPalindrome(head: LinkedListNode<number>|null): boolean {
    if (head === null || head.next === null) return true;

    const forward: LinkedListNode<number>|null = head;
    const backward = reversedAndClone(head);

    return isEqual(forward, backward);
}

function isEqual(head1: LinkedListNode<number>|null, head2: LinkedListNode<number>|null) {
    while (head1 && head2) {
        if (head1.data !== head2.data) return false;

        head1 = head1.next;
        head2 = head2.next;
    }

    return true;
}

function reversedAndClone(node: LinkedListNode<number>|null): LinkedListNode<number>|null {
    const reverse = new LinkedList<number>();

    while (node) {
        reverse.addNodeAtStart(node.data);
        node = node.next;
    }

    return reverse.head;
}
