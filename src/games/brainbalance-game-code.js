// 4 point
import { welcomeMessage, getName, getAnswer } from '..';

const brainbalance = () => {
  welcomeMessage();
  console.log('Balance the given number.\n');
  // taskMessage('braineven');
  const playerName = getName();
  getAnswer('brainbalance', playerName);
};

// getBalance
const getBalance = (digit) => {
  let correctAnswer = '';
  let counter = 0;
  let maxcounter = 0;
  let mincounter = 0;
  let minimalDigit = 10;
  let maximalDigit = 0;
  const digits = [];
  const stringDigit = String(digit);
  const lengthDigit = stringDigit.length;
  for (counter = 0; counter < lengthDigit; counter += 1) {
    digits[counter] = Number(stringDigit[counter]);
  }
  for (counter = 0; counter < lengthDigit; counter += 1) {
    if (digits[counter] > maximalDigit) {
      maximalDigit = digits[counter];
      maxcounter = counter;
    }
    if (digits[counter] < minimalDigit) {
      minimalDigit = digits[counter];
      mincounter = counter;
    }
  }
  if (maximalDigit - minimalDigit > 1) {
    digits[maxcounter] -= 1;
    digits[mincounter] += 1;
    for (counter = 0; counter < lengthDigit; counter += 1) {
      correctAnswer += digits[counter];
    }
    return getBalance(correctAnswer);
  }
  return digit;
};

export { brainbalance, getBalance };
