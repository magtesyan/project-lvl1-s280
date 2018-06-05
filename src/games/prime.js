// 9 point
import engine from '..';
import getRandomNumber from '../utils';

const task = ('Is this number prime?');

const isPrime = (randomNumber) => {
  for (let counter = 2; counter < randomNumber; counter += 1) {
    if (randomNumber % counter === 0) return false;
  }
  return true;
};

const startRound = () => {
  const randomNumber = getRandomNumber(100);
  const question = (`${randomNumber}`);
  const correctAnswer = (isPrime(randomNumber)) ? 'yes' : 'no';
  return [question, correctAnswer];
};

export default () => engine(task, startRound);
