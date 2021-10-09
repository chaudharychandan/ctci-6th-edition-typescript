import { LinkedListNode } from "data-structures/singly-linked-list";

/**
 * Deletes any mid node of a linked list
 *
 * Time complexity: O(1)
 * Space complexity: O(1)
 *
 * @param node the node of the linked list to be deleted
 * @returns void
 */
export function deleteNode<T>(node: LinkedListNode<T>|null): void {
    if (!node || !node.next) return;

    const next = node.next;
    node.data = next.data;
    node.next = next.next;
}
