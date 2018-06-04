// 5 point
import engine from '..';
import getRandomNumber from '../utils';

const task = ('What is the result of the expression?');

const getOpResult = (randomDigit1st, randomDigit2nd, operator) => {
  let correctAnswer = 0;
  if (operator === '+') correctAnswer += randomDigit1st + randomDigit2nd;
  if (operator === '-') correctAnswer += randomDigit1st - randomDigit2nd;
  if (operator === '*') correctAnswer += randomDigit1st * randomDigit2nd;
  return correctAnswer;
};

const startRound = () => {
  const randomDigit1st = getRandomNumber();
  const randomDigit2nd = getRandomNumber();
  const randomDigit3rd = getRandomNumber();
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
