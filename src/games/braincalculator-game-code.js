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
  const correctAnswer = [];
  const question = [];
  const operator = [];
  const task = ('What is the result of the expression?');
  for (let counter = 0; counter < 3; counter += 1) {
    const digit1 = getRandomDigit();
    const digit2 = getRandomDigit();
    const digit3 = getRandomDigit();
    if (digit3 < 333) operator[counter] = '+';
    else if (digit3 < 666) operator[counter] = '-';
    else operator[counter] = '*';
    correctAnswer[counter] = String(getOpResult(digit1, digit2, operator[counter]));
    question[counter] = (`Question: ${digit1} ${operator[counter]} ${digit2}`);
  }
  engine(task, question, correctAnswer);
};

export default braincalculator;
