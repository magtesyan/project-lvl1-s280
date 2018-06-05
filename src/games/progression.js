// 8 point
import engine from '..';
import getRandomNumber from '../utils';

const task = ('What number is missing in this progression?');
const progressionArrow = [10];
for (let counter = 0; counter < 10; counter += 1) {
  progressionArrow[counter] = counter + (2 * counter);
}

const startRound = () => {
  let correctAnswer = 0;
  let question = '';
  const randomNumber = (Math.round(getRandomNumber(10))) + 1;
  for (let counter = 0; counter < progressionArrow.length; counter += 1) {
    if (counter === randomNumber) {
      question += '.. ';
      correctAnswer = String(progressionArrow[counter]);
    } else question += `${progressionArrow[counter]} `;
  }
  return [question, correctAnswer];
};

export default () => engine(task, startRound);
