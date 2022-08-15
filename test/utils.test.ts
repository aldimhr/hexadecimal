import { squareOf16 } from '../src/utils';

describe('utils', () => {
  it('should return 1', () => {
    expect(squareOf16(0)).toBe(1);
  });

  it('should return 16', () => {
    expect(squareOf16(1)).toBe(16);
  });

  it('should return 1048576', () => {
    expect(squareOf16(5)).toBe(1048576);
  });
});
