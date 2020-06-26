import { getBaseUrl } from '../src/public/a';
jest.mock('../src/backend/b.jsw', () => ({
    buildLargeCollaider: () => {},
}));
describe('a', () => {
    it('should doing something', () => {
        expect(getBaseUrl()).toBe('test');
    });
})
