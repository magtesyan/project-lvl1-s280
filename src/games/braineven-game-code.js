// 4 point
import engine from '..';
import getRandomDigit from '../utils';

// IsEven
const isEven = (digit) => {
  if (digit % 2 === 0) return 'yes';
  return 'no';
};

const braineven = () => {
  const correctAnswer = [];
  const question = [];
  const task = ('Answer "yes" if number even otherwise answer "no".');
  for (let counter = 0; counter < 3; counter += 1) {
    const digit1 = getRandomDigit();
    question[counter] = (`Question: ${digit1}`);
    correctAnswer[counter] = isEven(digit1);
  }
  engine(task, question, correctAnswer);
};

export default braineven;
