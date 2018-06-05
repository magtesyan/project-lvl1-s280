// 9 point
import engine from '..';
import getRandomNumber from '../utils';

const task = ('Is this number prime?');

const isPrime = (number) => {
  for (let counter = 2; counter < Math.sqrt(number); counter += 1) {
    if (number % counter === 0) return false;
  }
  return true;
};

const gameData = () => {
  const randomNumber = getRandomNumber(100);
  const question = (`${randomNumber}`);
  const correctAnswer = (isPrime(randomNumber)) ? 'yes' : 'no';
  return [question, correctAnswer];
};

export default () => engine(task, gameData);
