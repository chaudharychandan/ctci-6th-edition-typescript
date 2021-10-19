export class QueueNode<T> {
    data: T;
    next: QueueNode<T>|null;

    constructor(data: T) {
        this.data = data;
        this.next = null;
    }
}

export class Queue<T> {
    front: QueueNode<T> | null;
    rear: QueueNode<T> | null;

    constructor() {
        this.front = null;
        this.rear = null;
    }

    add(data: T): void {
        const node = new QueueNode(data);
        if (this.rear !== null) {
            this.rear.next = node;
        }
        this.rear = node;

        if (this.front === this.rear) {
            this.front = this.rear;
        }
    }

    remove(): T {
        if (this.front === null) throw new Error('NoSuchElementException');

        const data = this.front.data;
        this.front = this.front.next;

        if (this.front === null) {
            this.rear = null;
        }

        return data;
    }

    peek(): T {
        if (this.front === null) throw new Error('NoSuchElementException');

        return this.front.data;
    }

    isEmpty(): boolean {
        return this.front === null;
    }
}
