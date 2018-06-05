// 5 point
import engine from '..';
import getRandomNumber from '../utils';

const task = ('What is the result of the expression?');

const getOpResult = (randomDigit1st, randomDigit2nd, operator) => {
  let correctAnswer = 0;
  switch (operator) {
    case '1':
      correctAnswer += randomDigit1st + randomDigit2nd;
      break;
    case '2':
      correctAnswer -= randomDigit1st + randomDigit2nd;
      break;
    case '3':
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
  let operator = '';
  if (randomDigit3rd < 333) operator += '+';
  else if (randomDigit3rd < 666) operator += '-';
  else operator += '*';
  const correctAnswer = String(getOpResult(randomDigit1st, randomDigit2nd, operator));
  const question = (`${randomDigit1st} ${operator} ${randomDigit2nd}`);
  return [question, correctAnswer];
};

const braincalculator = () => {
  engine(task, startRound);
};

export default braincalculator;
