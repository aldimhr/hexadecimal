import hexaDecode from '../src/hexaDecode';

describe('hexadecimal decode', () => {
  it('should return 5', () => {
    expect(hexaDecode('5')).toBe(5);
  });

  it('should return 10', () => {
    expect(hexaDecode('a')).toBe(10);
  });

  it('should return 255', () => {
    expect(hexaDecode('ff')).toBe(255);
  });

  it('should return 56356', () => {
    expect(hexaDecode('dc24')).toBe(56356);
  });
});
