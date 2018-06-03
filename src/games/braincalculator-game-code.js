// 5 point
import engine from '..';
import getRandomDigit from '../utils';

const getOpResult = (digit1, digit2, digit3) => {
  let correctAnswer = '';
  let operator = '';
  if (digit3 < 33) {
    correctAnswer += digit1 + digit2;
    operator += '+';
  } else if (digit3 < 66) {
    correctAnswer += digit1 - digit2;
    operator += '-';
  } else {
    correctAnswer += digit1 * digit2;
    operator += '*';
  }
  return [correctAnswer, operator];
};

const braincalculator = () => {
  const correctAnswer = [3];
  const question = [3];
  const operator = [3];
  const task = ('What is the result of the expression?');
  for (let counter = 0; counter < 3; counter += 1) {
    const digit1 = getRandomDigit();
    const digit2 = getRandomDigit();
    const digit3 = getRandomDigit();
    correctAnswer[counter] = getOpResult(digit1, digit2, digit3).values(0);
    operator[counter] = getOpResult(digit1, digit2, digit3).values(1);
    question[counter] = (`Question: ${digit1} ${operator[counter]} ${digit2}`);
  }
  engine(task, question, correctAnswer);
};

export { braincalculator, getOpResult };
