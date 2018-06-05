// 5 point
import engine from '..';
import getRandomNumber from '../utils';

const task = ('What is the result of the expression?');

const getOpResult = (randomDigit1st, randomDigit2nd, operator) => {
  let correctAnswer = 0;
  switch (operator) {
    case '+':
      correctAnswer += randomDigit1st + randomDigit2nd;
      break;
    case '-':
      correctAnswer -= randomDigit1st + randomDigit2nd;
      break;
    case '*':
      correctAnswer *= randomDigit1st + randomDigit2nd;
      break;
    default:
      break;
  }
  return correctAnswer;
};

const startRound = () => {
  const randomDigit1st = getRandomNumber(100);
  const randomDigit2nd = getRandomNumber(100);
  const randomDigit3rd = getRandomNumber(3);
  console.log(randomDigit3rd);
  let operator = '';
  switch (randomDigit3rd) {
    case '1':
      operator += '+';
      break;
    case '2':
      operator += '-';
      break;
    case '3':
      operator += '*';
      break;
    default:
      break;
  }
  const correctAnswer = String(getOpResult(randomDigit1st, randomDigit2nd, operator));
  const question = (`${randomDigit1st} ${operator} ${randomDigit2nd}`);
  return [question, correctAnswer];
};

const braincalculator = () => {
  engine(task, startRound);
};

export default braincalculator;
