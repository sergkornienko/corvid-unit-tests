import { buildLargeCollaider } from '../src/backend/b.jsw';

describe('b', () => {
    it('shoul have big and circle result', () => {
        expect(buildLargeCollaider()).toBe('O');
    });
})