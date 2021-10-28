import { TreeNode } from 'data-structures/binary-search-tree';
import { Queue } from 'data-structures/queue';
import { LinkedList } from 'data-structures/singly-linked-list';

/**
 * Time Complexity - O(N)
 * Space Complexity - O(N)
 *
 * @param bst - the input tree
 * @returns a hash map of height as a key and linked list of the nodes at the level
 */
export function createLevelLinkedList(root: TreeNode|null): Map<number, LinkedList<TreeNode>> {
    const map = new Map<number, LinkedList<TreeNode>>();
    const nodesInLevel = new Queue<TreeNode>();
    let height = 0;

    if (root === null) return map;
    nodesInLevel.add(root);

    while(!nodesInLevel.isEmpty()) {
        height++;
        let nodeCount = nodesInLevel.size();

        while (nodeCount--) {
            const currentNode = nodesInLevel.peek();

            if (currentNode?.left) {
                nodesInLevel.add(currentNode.left);
            }

            if (currentNode?.right) {
                nodesInLevel.add(currentNode.right);
            }

            const node = nodesInLevel.remove();

            let ll = map.get(height);
            if (!ll) {
                ll = new LinkedList<TreeNode>();
                map.set(height, ll);
            }
            ll.addNodeAtEnd(node);
        }
    }

    return map;
}
