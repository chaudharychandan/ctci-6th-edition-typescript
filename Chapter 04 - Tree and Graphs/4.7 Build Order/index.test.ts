import { findBuildOrder } from '.';

describe('findBuildOrder', () => {
    it('create build order of the projects as per dependency', () => {
        const projects = ['a', 'b', 'c', 'd', 'e', 'f'];
        const dependencies = [
            ['a', 'd'],
            ['f', 'b'],
            ['b', 'd'],
            ['f', 'a'],
            ['d', 'c'],
        ];

        const order = findBuildOrder(projects, dependencies);

        if (!order) return;

        for (const dependency of dependencies) {
            const [first, second] = dependency;

            expect(order.indexOf(first)).toBeLessThan(order.indexOf(second));
        }
    });

    it('returns `null` when there is a cicular dependency', () => {
        const projects = ['a', 'b', 'c', 'd', 'e'];
        const dependencies = [
            ['a', 'b'],
            ['b', 'c'],
            ['c', 'd'],
            ['b', 'a']
        ];

        const order = findBuildOrder(projects, dependencies);

        expect(order).toBe(null);
    });
});
