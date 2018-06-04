// 6 point
import engine from '..';
import getRandomDigit from '../utils';


const getGCD = (digit1, digit2) => {
  let correctAnswer = '';
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
  const digit1 = getRandomDigit();
  const digit2 = getRandomDigit();
  const question = (`Question: ${digit1} ${digit2}`);
  const correctAnswer = getGCD(digit1, digit2);
  return [question, correctAnswer];
};

const braingcd = () => {
  const task = ('Find the greatest common divisor of given numbers.');
  engine(task, startRound);
};

export default braingcd;
