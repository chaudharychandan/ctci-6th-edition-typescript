import { LinkedListNode } from 'data-structures/singly-linked-list';

/**
 * Deletes duplicate nodes from linked list
 *
 * Time complexity: O(N)
 * Space complexity: O(N)
 *
 * @param node Linked list head node
 * @returns void
 */
export function deleteDups<T>(head: LinkedListNode<T>|null) {
    if (head === null || head.next === null) return;

    let curr: LinkedListNode<T>|null = head;
    let prev: LinkedListNode<T>|null = null;
    const map = new Map();


    while (curr) {
        const { data } = curr;
        if (map.get(data)) {
            prev!.next = curr.next;
        } else {
            map.set(data, true);
            prev = curr;
        }

        curr = curr.next;
    }
}

/**
 * Deletes duplicate nodes from linked list
 *
 * Time complexity: O(N^2)
 * Space complexity: O(1)
 *
 * @param node Linked list head node
 * @returns void
 */
 export function deleteDupsWithNoBuffer<T>(head: LinkedListNode<T>|null) {
    if (head === null || head.next === null) return;

    let curr: LinkedListNode<T>|null = head;

    while (curr) {
        let runner = curr;

        while (runner.next) {
            if (runner.next.data === curr.data) {
                runner.next = runner.next.next;
            } else {
                runner = runner.next
            }
        }

        curr = curr.next;
    }
}
