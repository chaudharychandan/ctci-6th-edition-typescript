import { Stack } from "data-structures/stack";
import { sortStack } from ".";

describe('sortStack', () => {
    it('sorts the elements inside the stack', () => {
        const stack = new Stack<number>();
        stack.push(7);
        stack.push(4);
        stack.push(10);
        stack.push(8);

        const sortedStack = new Stack<number>();
        sortedStack.push(10);
        sortedStack.push(8);
        sortedStack.push(7);
        sortedStack.push(4);

        sortStack(stack);

        while(!stack.isEmpty()) {
            expect(stack.pop()).toBe(sortedStack.pop());
        }
    });
});
