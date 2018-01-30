import first, { clearFirst, setFirst } from './first';

describe('first reducer', () => {
  it('should return the initial state', () => {
    expect(first(undefined, {})).toBe(null);
  });
  it('should handle SET_FIRST', () => {
    const value = 0;
    expect(first(undefined, setFirst(value))).toBe(value);
  });
  it('should throw error SET_FIRST with undefined', () => {
    expect(() => first(undefined, setFirst())).toThrow();
  });
  it('should throw error SET_FIRST with null', () => {
    expect(() => first(undefined, setFirst(null))).toThrow();
  });
  it('should throw error SET_FIRST with non-number', () => {
    expect(() => first(undefined, setFirst('a'))).toThrow();
  });
  it('should throw error SET_FIRST with non-integer', () => {
    expect(() => first(undefined, setFirst(3.2))).toThrow();
  });
  it('should throw error SET_FIRST with integer less than 0', () => {
    expect(() => first(undefined, setFirst(-1))).toThrow();
  });
  it('should throw error SET_FIRST with integer greater than 9', () => {
    expect(() => first(undefined, setFirst(10))).toThrow();
  });
  it('should handle CLEAR_FIRST', () => {
    expect(first(0, clearFirst())).toBe(null);
  });
});
