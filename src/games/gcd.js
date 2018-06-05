// 6 point
import engine from '..';
import getRandomNumber from '../utils';

const task = ('Find the greatest common divisor of given numbers.');

const getGCD = (randomNumber1st, randomNumber2nd) => {
  let correctAnswer = 0;
  let minimalNumber = Math.min(randomNumber1st, randomNumber2nd);
  while (minimalNumber !== 0) {
    if (randomNumber1st % minimalNumber === 0 && randomNumber2nd % minimalNumber === 0) {
      correctAnswer += minimalNumber;
      break;
    }
    minimalNumber -= 1;
  }
  return correctAnswer;
};

const startRound = () => {
  const randomNumber1st = getRandomNumber(100);
  const randomNumber2nd = getRandomNumber(100);
  const question = (`${randomNumber1st} ${randomNumber2nd}`);
  const correctAnswer = String(getGCD(randomNumber1st, randomNumber2nd));
  return [question, correctAnswer];
};

export default () => engine(task, startRound);
