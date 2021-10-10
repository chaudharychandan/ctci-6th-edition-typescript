export class LinkedListNode<T> {
    data: T;
    next: LinkedListNode<T>|null = null;

    constructor(data: T) {
        this.data = data;
        this.next = null;
    }
}

export class LinkedList<T> {
    head: LinkedListNode<T>|null = null;
    tail: LinkedListNode<T>|null = null;

    addNodeAtEnd(data: T): LinkedListNode<T> {
        const node = new LinkedListNode<T>(data);
        if (this.head === null || this.tail === null) {
            this.head = node;
            this.tail = node;
        } else {
            this.tail.next = node;
            this.tail = this.tail.next;
        }
        return node;
    }

    addNodeAtStart(data: T): LinkedListNode<T> {
        const node = new LinkedListNode<T>(data);
        if (this.head === null || this.tail === null) {
            this.head = node;
            this.tail = node;
        } else {
            node.next = this.head;
            this.head = node;
        }
        return node;
    }

    addNodesAtEnd(list: T[]): void {
        for (const data of list) {
            this.addNodeAtEnd(data);
        }
    }

    static size(head: LinkedListNode<T>|null): number {
        let count = 0;
        let curr = head;

        while(curr) {
            count++;
            curr = curr.next;
        }

        return count;
    }
}
