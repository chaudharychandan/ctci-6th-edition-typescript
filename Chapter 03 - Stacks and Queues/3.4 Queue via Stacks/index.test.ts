import { QueueUsingTwoStacks } from ".";

describe('QueueUsingTwoStacks', () => {
    it('works with add and remove functions', () => {
        const queue = new QueueUsingTwoStacks();

        queue.add(1);
        queue.add(2);
        queue.add(3);

        let peek = queue.peek();
        expect(peek).toBe(1);

        const removed = queue.remove();
        expect(removed).toBe(1);

        queue.add(4);

        peek = queue.peek();
        expect(peek).toBe(2);
    });
});
