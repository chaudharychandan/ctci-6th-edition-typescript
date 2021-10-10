import { LinkedListNode } from "data-structures/singly-linked-list";

/**
 * Detects a loop inside linked list
 *
 * Time complexity: O(N)
 * Space complexity: O(1)
 *
 * @param head - the head node of the linked list
 * @returns the beginning node of the loop
 */
export function findLoopBeginning(head: LinkedListNode<number>|null): LinkedListNode<number>|null {
    if (head === null || head.next === null) return null;

    let slow: LinkedListNode<number>|null = head;
    let fast: LinkedListNode<number>|null = head;

    let collisionPoint = null;

    while(slow && fast?.next) {
        slow = slow.next;
        fast = fast.next.next;
        if (slow === fast) {
            collisionPoint = slow;
            break;
        }
    }

    if (!collisionPoint) return null;

    while (head && slow && head !== slow) {
        head = head.next;
        slow = slow.next;
    }

    return head;
}
