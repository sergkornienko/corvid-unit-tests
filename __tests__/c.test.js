import { multiply } from '../src/backend/c';

describe('c', () => {
    it('shoul return 0 when one parameter equal to 0', () => {
        const a = 0;
        const b = 1;
        expect(multiply(a, b)).toBe(0);
    });
})