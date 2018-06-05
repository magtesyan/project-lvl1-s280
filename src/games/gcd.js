// 6 point
import engine from '..';
import getRandomNumber from '../utils';

const task = ('Find the greatest common divisor of given numbers.');

const getGCD = (randomDigit1st, randomDigit2nd) => {
  let correctAnswer = 0;
  let minimalNumber = Math.min(randomDigit1st, randomDigit2nd);
  while (minimalNumber !== 0) {
    if (randomDigit1st % minimalNumber === 0 && randomDigit2nd % minimalNumber === 0) {
      correctAnswer += minimalNumber;
      break;
    }
    minimalNumber -= 1;
  }
  return correctAnswer;
};

const startRound = () => {
  const randomDigit1st = getRandomNumber(100);
  const randomDigit2nd = getRandomNumber(100);
  const question = (`${randomDigit1st} ${randomDigit2nd}`);
  const correctAnswer = String(getGCD(randomDigit1st, randomDigit2nd));
  return [question, correctAnswer];
};

const braingcd = () => engine(task, startRound);

export default braingcd;
