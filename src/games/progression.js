// 8 point
import engine from '..';
import getRandomNumber from '../utils';

const task = ('What number is missing in this progression?');
const progressionLength = 10;
let progressionArrow = [progressionLength];

const getProgression = () => {
  progressionArrow[0] = getRandomNumber(10);
  const progrType = getRandomNumber(2);
  const progrStep = getRandomNumber(3) + 1;
  for (let counter = 1; counter < progressionLength; counter += 1) {
    if (progrType === 1) progressionArrow[counter] = progressionArrow[counter - 1] + progrStep;
    else progressionArrow[counter] = progressionArrow[counter - 1] * progrStep;
  }
  return progressionArrow;
};

const gameData = () => {
  let correctAnswer = 0;
  let question = '';
  const randomNumber = getRandomNumber(10) + 1;
  progressionArrow = getProgression();
  for (let counter = 0; counter < progressionLength; counter += 1) {
    if (counter === randomNumber) {
      question += '.. ';
      correctAnswer = String(progressionArrow[counter]);
    } else question += `${progressionArrow[counter]} `;
  }
  return [question, correctAnswer];
};

export default () => engine(task, gameData);
