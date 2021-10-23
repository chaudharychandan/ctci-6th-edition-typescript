import { Stack } from "data-structures/stack";

export class QueueUsingTwoStacks<T> {
    stackNewest: Stack<T>;
    stackOldest: Stack<T>;

    constructor() {
        this.stackOldest = new Stack<T>();
        this.stackNewest = new Stack<T>();
    }

    add(value: T): void {
        this.stackNewest.push(value);
    }

    shiftStacks(): void {
        if (this.stackOldest.isEmpty()) {
            while(!this.stackNewest.isEmpty()) {
                this.stackOldest.push(this.stackNewest.pop());
            }
        }
    }

    remove(): T {
        this.shiftStacks();
        return this.stackOldest.pop();
    }

    peek(): T {
        this.shiftStacks();
        return this.stackOldest.peek();
    }
}
