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

    add(data: T) {
        const node = new LinkedListNode<T>(data);
        if (this.head === null || this.tail === null) {
            this.head = node;
            this.tail = node;
        } else {
            this.tail.next = node;
            this.tail = this.tail.next;
        }
    }
}
