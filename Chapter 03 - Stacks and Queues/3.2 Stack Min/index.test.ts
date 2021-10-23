import { StackWithMin } from ".";

describe('StackWithMin', () => {
    it('returns minimum correctly', () => {
        const stack = new StackWithMin();
        stack.push(5);
        expect(stack.min()).toBe(5);

        stack.push(3);
        expect(stack.min()).toBe(3);

        stack.push(8);
        expect(stack.min()).toBe(3);

        stack.push(3);
        expect(stack.min()).toBe(3);

        stack.pop();
        expect(stack.min()).toBe(3);

        stack.pop();
        expect(stack.min()).toBe(3);

        stack.pop();
        expect(stack.min()).toBe(5);
    });
});
