import { InMemoryDb } from './in-memory-db';

describe('InMemoryDb', () => {
  it('should create an instance', () => {
    expect(new InMemoryDb()).toBeTruthy();
  });
});
