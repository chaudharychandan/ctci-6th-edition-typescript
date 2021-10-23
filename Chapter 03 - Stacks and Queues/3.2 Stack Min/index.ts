import { Stack } from "data-structures/stack";

export class StackWithMin extends Stack<number>  {
    minStack: Stack<number>;

    constructor() {
        super();
        this.minStack = new Stack<number>();
    }

    /**
     * pushes the value into the stack and updates min value if necessary
     *
     * @param value - the value to be pushed
     */
    push(value: number): void {
        if (value <= this.min()) {
            this.minStack.push(value);
        }

        super.push(value);
    }

    /**
     * pops from the stack and updates min value if necessary
     *
     * @param value - the value at the top of the stack
     */
    pop(): number {
        const value = super.pop();
        if (value === this.min()) {
            this.minStack.pop();
        }

        return value;
    }

    /**
     * Time complexity: O(1)
     *
     * @returns the minimum value present in stack
     */
    min(): number {
        if (this.minStack.isEmpty()) {
            return Infinity;
        } else {
            return this.minStack.peek();
        }
    }
}
