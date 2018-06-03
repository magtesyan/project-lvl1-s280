// 6 point
import engine from '..';
import getRandomDigit from '../utils';


const getGCD = (digit1, digit2) => {
  let correctAnswer = '';
  let minimalNumber = Math.min(digit1, digit2);
  while (minimalNumber !== 0) {
    if (digit1 % minimalNumber === 0 && digit2 % minimalNumber === 0) {
      correctAnswer += minimalNumber;
      break;
    }
    minimalNumber -= 1;
  }
  return correctAnswer;
};

const braingcd = () => {
  const correctAnswer = [];
  const question = [];
  const task = ('Find the greatest common divisor of given numbers.');
  for (let counter = 0; counter < 3; counter += 1) {
    const digit1 = getRandomDigit();
    const digit2 = getRandomDigit();
    question[counter] = (`Question: ${digit1} ${digit2}`);
    correctAnswer[counter] = getGCD(digit1, digit2);
  }
  engine(task, question, correctAnswer);
};

export { braingcd };
