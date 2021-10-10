import { LinkedList, LinkedListNode } from "data-structures/singly-linked-list";

/**
 * Determines if there is an intersection and return the intersecting node
 *
 * Time complexity: O(N)
 * Space complexity: O(1)
 *
 * @param head1 - head of one linked list
 * @param head2 - head of other linked list
 * @returns the node if there is an intersecting node, otherwise `null`
 */
export function intersection(head1: LinkedListNode<number>|null, head2: LinkedListNode<number>|null): LinkedListNode<number>|null {
    if (head1 === null || head2 === null) return null;
    if (head1 === head2) return head1;

    const length1 = LinkedList.size(head1);
    const length2 = LinkedList.size(head2);
    let curr1: LinkedListNode<number>|null = head1;
    let curr2: LinkedListNode<number>|null = head2;

    let diff = Math.abs(length1 - length2);

    if (length1 > length2) {
        while (diff > 0 && curr1) {
            curr1 = curr1.next;
            diff--;
        }
    } else if (length1 < length2) {
        while (diff > 0 && curr2) {
            curr2 = curr2.next;
            diff--;
        }
    }

    while (curr1 && curr2) {
        if (curr1 === curr2) return curr1;
        curr1 = curr1.next;
        curr2 = curr2.next;
    }

    return null;
}
