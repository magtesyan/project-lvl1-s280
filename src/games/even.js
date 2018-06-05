// 4 point
import engine from '..';
import getRandomNumber from '../utils';

const task = ('Answer "yes" if number even otherwise answer "no".');

const isEven = randomNumber => (randomNumber % 2 === 0);

const startRound = () => {
  const randomNumber = getRandomNumber(100);
  const question = (`${randomNumber}`);
  const correctAnswer = (isEven(randomNumber)) ? 'yes' : 'no';
  return [question, correctAnswer];
};

export default () => engine(task, startRound);
