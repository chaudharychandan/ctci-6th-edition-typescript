import { LinkedListNode } from "data-structures/singly-linked-list";

/**
 * Returns the kth node data from last of a singly linked list
 *
 * Time complexity: O(N)
 * Space complexity: O(1)
 *
 * @param head Linked list's head node
 * @param k the kth node from the last
 * @returns the data field of the kth to last element
 */
export function kthToLast<T>(head: LinkedListNode<T>|null, k: number): T|null {
    if(head === null || k < 1) return null;

    let curr1: LinkedListNode<T>|null = head;
    let curr2: LinkedListNode<T>|null = head;

    while (k > 0) {
        if (!curr1) return null;

        curr1 = curr1.next;
        k--;
    }

    while (curr1) {
        curr1 = curr1.next;
        curr2 = curr2!.next;
    }

    return curr2!.data;
}
