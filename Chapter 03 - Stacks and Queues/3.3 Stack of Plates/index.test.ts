import { SetOfStacks } from ".";

describe('SetOfStacks', () => {
    it('creates multiple stacks and popAt removes top element from ith stack', () => {
        const setOfStacks = new SetOfStacks(2);

        setOfStacks.push(1);
        setOfStacks.push(2);
        setOfStacks.push(3);
        setOfStacks.push(4);
        setOfStacks.push(5);

        setOfStacks.popAt(1);

        const value1 = setOfStacks.pop();
        expect(value1).toBe(5);

        const value2 = setOfStacks.pop();
        expect(value2).toBe(3);
    });
});
