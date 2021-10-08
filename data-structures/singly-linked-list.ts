export class LinkedListNode {
    data: any = null;
    next: LinkedListNode|null = null;

    constructor(data: any) {
        this.data = data;
        this.next = null;
    }
}

export class LinkedList {
    head: LinkedListNode|null = null;
    tail: LinkedListNode|null = null;

    add(data: any) {
        const node = new LinkedListNode(data);
        if (this.head === null || this.tail === null) {
            this.head = node;
            this.tail = node;
        } else {
            this.tail.next = node;
            this.tail = this.tail.next;
        }
    }
}
