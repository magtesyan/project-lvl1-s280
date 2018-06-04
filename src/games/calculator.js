// 5 point
import engine from '..';
import getRandomNumber from '../utils';

const task = ('What is the result of the expression?');

const getOpResult = (digit1, digit2, operator) => {
  let correctAnswer = 0;
  if (operator === '+') correctAnswer += digit1 + digit2;
  if (operator === '-') correctAnswer += digit1 - digit2;
  if (operator === '*') correctAnswer += digit1 * digit2;
  return correctAnswer;
};

const startRound = () => {
  const randomDigit1 = getRandomNumber();
  const randomDigit2 = getRandomNumber();
  const randomDigit3 = getRandomNumber();
  let operator = '';
  if (randomDigit3 < 333) operator += '+';
  else if (randomDigit3 < 666) operator += '-';
  else operator += '*';
  const correctAnswer = String(getOpResult(randomDigit1, randomDigit2, operator));
  const question = (`${randomDigit1} ${operator} ${randomDigit2}`);
  return [question, correctAnswer];
};

const braincalculator = () => {
  engine(task, startRound);
};

export default braincalculator;
