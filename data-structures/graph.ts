export class GraphNode<T> {
    value: T;
    children: GraphNode<T>[];

    constructor(value: T) {
        this.value = value;
        this.children = [];
    }
}

export class Graph<T> {
    nodes: GraphNode<T>[];

    constructor() {
        this.nodes = [];
    }

    addNode(value: T): GraphNode<T> {
        const node = new GraphNode(value);
        this.nodes = [ ...this.nodes, node ];

        return node;
    }

    removeNode(node: GraphNode<T>): void {
        for (const child of node.children) {
            child.children = child.children.filter(c => c !== node);
        }
        this.nodes = this.nodes.filter(curr => curr !== node);
    }

    addEdge(node1: GraphNode<T>, node2: GraphNode<T>): void {
        if (!node1.children.includes(node2)) {
            node1.children.push(node2);
            node2.children.push(node1);
        }
    }

    removeEdge(node1: GraphNode<T>, node2: GraphNode<T>): void {
        node1.children = node1.children.filter(child => child !== node2);
        node2.children = node2.children.filter(child => child !== node1);
    }
}
