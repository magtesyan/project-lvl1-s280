// 4 point
import engine from '..';
import getRandomDigit from '../utils';

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
    digits.sort();
    for (counter = 0; counter < lengthDigit; counter += 1) {
      correctAnswer += digits[counter];
    }
    return getBalance(correctAnswer);
  }
  return digit;
};

const brainbalance = () => {
  const correctAnswer = [];
  const question = [];
  const task = ('Balance the given number.');
  for (let counter = 0; counter < 3; counter += 1) {
    const digit1 = getRandomDigit();
    question[counter] = (`Question: ${digit1}`);
    correctAnswer[counter] = getBalance(digit1);
  }
  engine(task, question, correctAnswer);
};

export default brainbalance;
