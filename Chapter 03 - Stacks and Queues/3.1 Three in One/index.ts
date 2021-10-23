type StackNumber = 0 | 1 | 2;

export class FixedMultiStack {
    numberOfStacks = 3;
    stackCapacity: number;
    values: number[];
    sizes: number[];

    constructor(stackSize: number) {
        this.stackCapacity = stackSize;
        this.values = Array.from({ length: stackSize*this.numberOfStacks }, () => 0);
        this.sizes = Array.from({ length: this.numberOfStacks }, () => 0);
    }

    /**
     * pushes element to corresponding stack if not full
     *
     * @param stackNum - stack number
     * @param value - the number to be pushed to stack
     */
    push(stackNum: StackNumber, value: number): void {
        if (this.isFull(stackNum)) {
            throw new Error('FullStackException');
        }

        this.sizes[stackNum]++;
        const index = this.indexOfTop(stackNum);
        this.values[index] = value;
    }

    /**
     * pops element from corresponding stack if not empty
     *
     * @param stackNum - stack number
     */
    pop(stackNum: StackNumber): number {
        if (this.isEmpty(stackNum)) {
            throw new Error('EmptyStackException');
        }

        const index = this.indexOfTop(stackNum);
        const value = this.values[index];
        this.sizes[stackNum]--;

        return value;
    }

    /**
     * Determines if corresponding stack is full
     *
     * @param stackNum - stack number
     */
    isFull(stackNum: StackNumber): boolean {
        return this.sizes[stackNum] === this.stackCapacity;
    }

    /**
     * Determines if corresponding stack is empty
     *
     * @param stackNum - stack number
     */
    isEmpty(stackNum: StackNumber): boolean {
        return this.sizes[stackNum] === 0;
    }

    /**
     * Returns the index of top element of the corresponding stack
     *
     * @param stackNum - stack number
     *
     * @returns the index of top element
     */
    indexOfTop(stackNum: StackNumber): number {
        const offset = stackNum * this.stackCapacity;
        const size = this.sizes[stackNum];
        return offset + size - 1;
    }

    /**
     * @param stackNum - stack number
     * @returns the top element of the corresponding stack if not empty
     */
    peek(stackNum: StackNumber): number {
        if (this.isEmpty(stackNum)) {
            throw new Error('EmptyStackException');
        }

        const index = this.indexOfTop(stackNum);
        return this.values[index];
    }
}
