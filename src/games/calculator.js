// 5 point
import engine from '..';
import getRandomNumber from '../utils';

const task = ('What is the result of the expression?');

const startRound = () => {
  const randomNumber1st = getRandomNumber(100);
  const randomNumber2nd = getRandomNumber(100);
  const operationType = getRandomNumber(3);
  let correctAnswer = 0;
  let operator = '';
  switch (operationType) {
    case 1:
      operator += '+';
      correctAnswer = randomNumber1st + randomNumber2nd;
      break;
    case 2:
      operator += '-';
      correctAnswer = randomNumber1st - randomNumber2nd;
      break;
    case 3:
      operator += '*';
      correctAnswer = randomNumber1st * randomNumber2nd;
      break;
    default:
      break;
  }
  const question = (`${randomNumber1st} ${operator} ${randomNumber2nd}`);
  return [question, String(correctAnswer)];
};

export default () => engine(task, startRound);
