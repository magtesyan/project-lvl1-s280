// 9 point
import engine from '..';
import getRandomNumber from '../utils';

const task = ('Is this number prime?');

const isPrime = (randomDigit) => {
  for (let counter = 2; counter < randomDigit; counter += 1) {
    if (randomDigit % counter === 0) return false;
  }
  return true;
};

const startRound = () => {
  const randomDigit = getRandomNumber(100);
  const question = (`${randomDigit}`);
  const correctAnswer = (isPrime(randomDigit)) ? 'yes' : 'no';
  return [question, correctAnswer];
};

const brainprime = () => engine(task, startRound);

export default brainprime;
