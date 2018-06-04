// 4 point
import engine from '..';
import getRandomDigit from '../utils';

// IsEven
const isEven = (digit) => {
  if (digit % 2 === 0) return 'yes';
  return 'no';
};

const startRound = () => {
  const digit1 = getRandomDigit();
  const question = (`Question: ${digit1}`);
  const correctAnswer = isEven(digit1);
  return [question, correctAnswer];
};

const braineven = () => {
  const task = ('Answer "yes" if number even otherwise answer "no".');
  engine(task, startRound);
};

export default braineven;
