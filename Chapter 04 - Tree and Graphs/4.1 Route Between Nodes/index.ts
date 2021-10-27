import { Queue } from "data-structures/queue";
import { GraphNode, Graph } from 'data-structures/graph';

export function search(graph: Graph<string>, start: GraphNode<string>, end: GraphNode<string>): boolean {
    const visited = new Map<GraphNode<string>, boolean>();

    const queue = new Queue<GraphNode<string>>();
    queue.add(start);
    visited.set(start, true);

    while(!queue.isEmpty()) {
        const node = queue.remove();
        if (node !== null) {
            for (const child of node.children) {
                if (!visited.get(child)) {
                    if (child === end) {
                        return true;
                    } else {
                        visited.set(child, true);
                        queue.add(child);
                    }
                }
            }
            visited.set(node, true);
        }
    }

    return false;
}
