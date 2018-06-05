// 5 point
import engine from '..';
import getRandomNumber from '../utils';

const task = ('What is the result of the expression?');

const startRound = () => {
  const randomDigit1st = getRandomNumber(100);
  const randomDigit2nd = getRandomNumber(100);
  const operationType = getRandomNumber(3);
  let correctAnswer = 0;
  let operator = '';
  switch (operationType) {
    case 1:
      operator += '+';
      correctAnswer = randomDigit1st + randomDigit2nd;
      break;
    case 2:
      operator += '-';
      correctAnswer = randomDigit1st - randomDigit2nd;
      break;
    case 3:
      operator += '*';
      correctAnswer = randomDigit1st * randomDigit2nd;
      break;
    default:
      break;
  }
  const question = (`${randomDigit1st} ${operator} ${randomDigit2nd}`);
  return [question, String(correctAnswer)];
};

const braincalculator = () => engine(task, startRound);

export default braincalculator;
