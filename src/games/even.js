// 4 point
import engine from '..';
import getRandomNumber from '../utils';

const task = ('Answer "yes" if number even otherwise answer "no".');

const isEven = randomDigit => (randomDigit % 2 === 0);
//  if (randomDigit % 2 === 0) return true;
//  return false;
// };

const startRound = () => {
  const randomDigit = getRandomNumber(100);
  const question = (`${randomDigit}`);
  const correctAnswer = (isEven(randomDigit)) ? 'yes' : 'no';
  return [question, correctAnswer];
};

const braineven = () => {
  engine(task, startRound);
};

export default braineven;
