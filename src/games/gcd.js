// 6 point
import engine from '..';
import getRandomNumber from '../utils';

const task = ('Find the greatest common divisor of given numbers.');

const getGCD = (digit1, digit2) => {
  let correctAnswer = 0;
  let minimalNumber = Math.min(digit1, digit2);
  while (minimalNumber !== 0) {
    if (digit1 % minimalNumber === 0 && digit2 % minimalNumber === 0) {
      correctAnswer += minimalNumber;
      break;
    }
    minimalNumber -= 1;
  }
  return correctAnswer;
};

const startRound = () => {
  const randomDigit1 = getRandomNumber();
  const randomDigit2 = getRandomNumber();
  const question = (`${randomDigit1} ${randomDigit2}`);
  const correctAnswer = String(getGCD(randomDigit1, randomDigit2));
  return [question, correctAnswer];
};

const braingcd = () => {
  engine(task, startRound);
};

export default braingcd;
