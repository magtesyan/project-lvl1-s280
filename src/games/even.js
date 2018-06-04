// 4 point
import engine from '..';
import getRandomNumber from '../utils';

const task = ('Answer "yes" if number even otherwise answer "no".');

const isEven = (digit) => {
  if (digit % 2 === 0) return true;
  return false;
};

const startRound = () => {
  const randomDigit1 = getRandomNumber();
  const question = (`${randomDigit1}`);
  const correctAnswer = (isEven(randomDigit1)) ? 'yes' : 'no';
  return [question, correctAnswer];
};

const braineven = () => {
  engine(task, startRound);
};

export default braineven;
