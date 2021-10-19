export class StackNode<T> {
    data: T;
    next: StackNode<T>|null;

    constructor(data: T) {
        this.data = data;
        this.next = null;
    }
}

export class Stack<T> {
    top: StackNode<T> | null = null;

    pop(): T {
        if (this.top === null) throw new Error('StackEmptyException');

        const item = this.top.data;
        this.top = this.top.next;

        return item;
    }

    push(data: T): void {
        const node = new StackNode(data);
        node.next = this.top;
        this.top = node;
    }

    peek(): T {
        if (this.top === null) throw new Error('StackEmptyException');

        return this.top.data;
    }

    isEmpty(): boolean {
        return this.top === null;
    }
}
