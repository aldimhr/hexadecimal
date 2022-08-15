import { squareOf16 } from './utils';

type TLetterSymbol = {
  [key: string]: number;
};

const letterSymbol: TLetterSymbol = {
  a: 10,
  b: 11,
  c: 12,
  d: 13,
  e: 14,
  f: 15,
};

function hexaDecode(input: string) {
  try {
    let arrInput = input.split('');
    let arrInputNumber = arrInput.map((value: string) =>
      isNaN(parseInt(value)) ? letterSymbol[value] : parseInt(value)
    );
    let result = 0;
    let limit = arrInputNumber.length - 1;

    for (let i = 0; i <= limit; i++) {
      result += arrInputNumber[i] * squareOf16(limit - i);
    }

    return result;
  } catch (error) {
    return error;
  }
}

export default hexaDecode;
