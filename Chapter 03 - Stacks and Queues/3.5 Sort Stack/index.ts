import { Stack } from "data-structures/stack";

/**
 * Sorts a stack such that the smallest items are on the top
 *
 * Time complexity: O(N^2)
 * Space complexity: O(N)
 *
 * @param stack - the input stack
 */
export function sortStack(stack: Stack<number>): void {
    const tempStack = new Stack<number>();

    while (!stack.isEmpty()) {
        const value = stack.pop();

        while (!tempStack.isEmpty() && tempStack.peek() > value) {
            stack.push(tempStack.pop());
        }

        tempStack.push(value);
    }

    while (!tempStack.isEmpty()) {
        stack.push(tempStack.pop());
    }
}
