type TLetterSym = {
  [key: number]: string;
};

const letterSym: TLetterSym = {
  10: 'a',
  11: 'b',
  12: 'c',
  13: 'd',
  14: 'e',
  15: 'f',
};

function hexaEncode(input: number) {
  if (letterSym[input]) return letterSym[input];

  let isDone = false;
  let arrLastResult: number[] = [];
  let arrModulus = [];

  while (!isDone) {
    let lastResult: number;
    let dividedBy16: number;
    let modulus: number;

    if (!arrLastResult.length) {
      lastResult = input;
    } else {
      lastResult = arrLastResult[arrLastResult.length - 1];
    }

    dividedBy16 = Math.floor(lastResult / 16);
    modulus = lastResult - dividedBy16 * 16;

    if (lastResult !== 0) {
      arrLastResult.push(dividedBy16);
      arrModulus.push(modulus);
    }
    if (lastResult === 0) isDone = true;
  }

  let result = [];
  for (let i = arrModulus.length - 1; i >= 0; i--) {
    let hasLetterSym = letterSym[arrModulus[i]];
    if (hasLetterSym) {
      result.push(hasLetterSym);
    } else {
      result.push(arrModulus[i]);
    }
  }

  return result.join('');
}

export default hexaEncode;
