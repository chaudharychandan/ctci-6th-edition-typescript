import { LinkedListNode } from "data-structures/singly-linked-list";

/**
 * Partitions the linked list around a value x,
 * such that all nodes less than x come
 * before all the nodes greater than or equal to x
 *
 * @param head - head node of the singly linked list
 * @param x - the value around which partition needs to be performed
 */
export function partition(head: LinkedListNode<number>|null, x: number): void {
    if (head === null || head.next === null) return;

    let runner: LinkedListNode<number>|null = head;
    let curr: LinkedListNode<number>|null = head;

    while (curr && runner) {
        if (curr.data < x) {
            const temp = runner.data;
            runner.data = curr.data;
            curr.data = temp;

            runner = runner.next
        }
        curr = curr.next;
    }
}
