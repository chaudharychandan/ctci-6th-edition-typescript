class StackNode {
    value: number;
    next: StackNode|null;
    prev: StackNode|null;
    constructor(value: number) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

class Stack {
    capacity: number;
    top: StackNode|null = null;
    bottom: StackNode|null = null;
    size = 0;

    constructor(capacity: number) {
        this.capacity = capacity;
    }

    join(next: StackNode|null, prev: StackNode|null): void {
        if (prev !== null) prev.next = next;
        if (next !== null) next.prev = prev;
    }

    isFull() {
        return this.size === this.capacity;
    }

    isEmpty() {
        return this.size === 0;
    }

    push(value: number) {
        if (this.isFull()) return false;

        this.size++;
        const node = new StackNode(value);
        if (this.size === 1) this.bottom = node;
        this.join(node, this.top);
        this.top = node;
        return true;
    }

    pop(): number {
        if (this.isEmpty() || this.top === null) throw new Error('StackEmptyException');

        const top = this.top;
        this.top = this.top.prev;
        this.size--;
        return top.value;
    }

    removeBottom(): number {
        const bottom = this.bottom;
        if (bottom === null) throw new Error('StackEmptyException');
        this.bottom = bottom.next;

        if (this.bottom !== null) this.bottom.prev = null;
        this.size--;

        return bottom.value;

    }
}

export class SetOfStacks {
    stacks: Stack[] = [];
    capacity: number;

    constructor(capacity: number) {
        this.capacity = capacity;
    }

    getLastStack(): Stack | null {
        if (this.stacks.length === 0) return null;

        return this.stacks[this.stacks.length-1];
    }

    push(value: number): void {
        const last = this.getLastStack();

        if (last !== null && !last.isFull()) {
            last.push(value);
        } else {
            const stack = new Stack(this.capacity);
            stack.push(value);
            this.stacks.push(stack);
        }
    }

    pop(): number {
        const last = this.getLastStack();

        if (last === null) throw new Error('EmptyStackException');
        const value = last.pop();
        if(last.size === 0) this.stacks.pop();

        return value;
    }

    isEmpty(): boolean {
        const last = this.getLastStack();

        return last === null || last.isEmpty();
    }

    popAt(index: number): number {
        return this.leftShift(index, true);
    }

    leftShift(index: number, removeTop: boolean): number {
        const stack = this.stacks[index];
        let removedItem;

        if (removeTop) removedItem = stack.pop();
        else removedItem = stack.removeBottom();

        if (stack.isEmpty()) {
            this.stacks.splice(index, 1);
        } else if (this.stacks.length > index + 1) {
            const value = this.leftShift(index+1, false);
            stack.push(value);
        }

        return removedItem;
    }
}
