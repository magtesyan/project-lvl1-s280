// 8 point
import engine from '..';
import getRandomNumber from '../utils';

const task = ('What number is missing in this progression?');
const progressionArrow = [10];
for (let counter = 0; counter < progressionArrow.length; counter += 1) {
  progressionArrow[counter] = counter + 2;
}

const startRound = () => {
  let correctAnswer = 0;
  let question = '';
  const randomDigit = (Math.round(getRandomNumber() / 100)) + 1;
  console.log(randomDigit);
  for (let counter = 0; counter < progressionArrow.length; counter += 1) {
    if (counter === randomDigit) {
      question += '.. ';
      correctAnswer = progressionArrow[counter];
    } else question += progressionArrow[counter];
  }
  return [question, correctAnswer];
};

const brainprogression = () => {
  engine(task, startRound);
};

export default brainprogression;