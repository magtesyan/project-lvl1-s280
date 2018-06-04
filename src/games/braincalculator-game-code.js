// 5 point
import engine from '..';
import getRandomDigit from '../utils';

const getOpResult = (digit1, digit2, operator) => {
  let correctAnswer = 0;
  if (operator === '+') correctAnswer += digit1 + digit2;
  if (operator === '-') correctAnswer += digit1 - digit2;
  if (operator === '*') correctAnswer += digit1 * digit2;
  return correctAnswer;
};

const braincalculator = () => {
  const task = ('What is the result of the expression?');
  const startRound = () => {
    const digit1 = getRandomDigit();
    const digit2 = getRandomDigit();
    const digit3 = getRandomDigit();
    let operator = '';
    if (digit3 < 333) operator += '+';
    else if (digit3 < 666) operator += '-';
    else operator += '*';
    const correctAnswer = String(getOpResult(digit1, digit2, operator));
    const question = (`Question: ${digit1} ${operator} ${digit2}`);
    return [question, correctAnswer];
  };
  engine(task, startRound);
};

export default braincalculator;
