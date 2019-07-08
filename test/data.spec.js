const data = require('../src/data.js');


describe('data', () => {
  it('is an object', () => {
    expect(typeof data).toBe('object');
  });

  it('returns `example`', () => {
    expect(example()).toBe('example');
  });
});
