export const squareOf16 = (square: number): number => {
  if (square === 0) return 1;

  let result = 1;

  for (let i = 0; i < square; i++) {
    result *= 16;
  }

  return result;
};
