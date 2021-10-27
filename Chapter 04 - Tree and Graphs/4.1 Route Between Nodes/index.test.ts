import { search } from ".";
import { Graph, GraphNode } from 'data-structures/graph';

describe('search', () => {
    let graph: Graph<string>;
    let node1: GraphNode<string>;
    let node2: GraphNode<string>;
    let node3: GraphNode<string>;
    let node4: GraphNode<string>;

    beforeEach(() => {
        graph = new Graph<string>();
        node1 = graph.addNode('Node1');
        node2 = graph.addNode('Node2');
        node3 = graph.addNode('Node3');
        node3 = graph.addNode('Node4');

        graph.addEdge(node1, node2);
        graph.addEdge(node2, node3);
    });

    it('returns `true` when there is a route between two nodes inside a graph', () => {
        const routeAvailable = search(graph, node1, node3);

        expect(routeAvailable).toBe(true);
    });

    it('returns `false` when there is no route between two nodes inside a graph', () => {
        const routeAvailable = search(graph, node1, node4);

        expect(routeAvailable).toBe(false);
    });
});
