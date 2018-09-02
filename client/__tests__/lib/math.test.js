import { sum } from 'lib/math';

describe('math lib sum', () => {
  test('should correctly sum 1 + 2', () => {
    expect(sum(1, 2)).toBe(3);
  });
  test('should correctly sum 5 + 5 + 5', () => {
    expect(sum(5, 5, 5)).toBe(15);
  });
  test('should handle single argument', () => {
    expect(sum(8)).toBe(8);
  });
  test('should handle no argument', () => {
    expect(sum()).toBe(null);
  });
});
