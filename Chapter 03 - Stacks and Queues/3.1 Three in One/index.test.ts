import {
    FixedMultiStack
} from '.';

describe('FixedMultiStack', () => {
    it('creates 3 stacks of fixed size with no elements', () => {
        const stack = new FixedMultiStack(4);

        expect(stack.isEmpty(0)).toBe(true);
        expect(stack.isEmpty(1)).toBe(true);
        expect(stack.isEmpty(2)).toBe(true);
    });

    it('pushes and pops the element to correct stack', () => {
        const stack = new FixedMultiStack(4);
        stack.push(0, 100);
        stack.push(0, 101);
        stack.push(0, 102);
        stack.push(0, 103);
        stack.push(1, 200);

        const stack0Peek = stack.peek(0);
        const stack1Peek = stack.peek(1);

        expect(stack.isEmpty(0)).toBe(false);
        expect(stack.isFull(0)).toBe(true);
        expect(stack.isEmpty(2)).toBe(true);

        expect(stack0Peek).toBe(103);
        expect(stack1Peek).toBe(200);

        const stack1PoppedValue = stack.pop(1);

        expect(stack1PoppedValue).toBe(200);
        expect(stack.isEmpty(1)).toBe(true);
    });
});
