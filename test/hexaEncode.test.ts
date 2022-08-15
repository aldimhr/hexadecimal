import hexaEncode from '../src/hexaEncode';

describe('hexadecimal encode', () => {
  it('should return a', () => {
    expect(hexaEncode(5)).toBe('5');
  });

  it('should return a', () => {
    expect(hexaEncode(10)).toBe('a');
  });

  it('should return ff', () => {
    expect(hexaEncode(255)).toBe('ff');
  });

  it('should return dc24', () => {
    expect(hexaEncode(56356)).toBe('dc24');
  });
});
