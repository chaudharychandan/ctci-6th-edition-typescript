import { LinkedList, LinkedListNode } from "data-structures/singly-linked-list";

/**
 * Adds the nodes of two linked lists and returns it
 *
 * Time complexity: 0(Max(M, N))
 * Space complexity: 0(Max(M, N))
 *
 * @param head1 - head of one linked list
 * @param head2 - head of other linked list
 * @returns head node of the linked list which represents the sum of lists
 */
export function sumLists(head1: LinkedListNode<number>|null, head2: LinkedListNode<number>|null): LinkedListNode<number>|null {
    if (head1 === null || head2 === null) return head1 || head2;

    const result = new LinkedList<number>();
    let carry = 0;

    while (head1 && head2) {
        const sum = head1.data + head2.data + carry;
        carry = Math.floor(sum / 10);
        const data = sum % 10;
        result.addNodeAtEnd(data);

        head1 = head1.next;
        head2 = head2.next;
    }

    while (head1) {
        const sum = head1.data + carry;
        carry = Math.floor(sum / 10);
        const data = sum % 10;
        result.addNodeAtEnd(data);
        head1 = head1.next;
    }

    while (head2) {
        const sum = head2.data + carry;
        carry = Math.floor(sum / 10);
        const data = sum % 10;
        result.addNodeAtEnd(data);
        head2 = head2.next;
    }

    if (carry > 0) {
        result.addNodeAtEnd(carry);
    }

    return result.head;
}
