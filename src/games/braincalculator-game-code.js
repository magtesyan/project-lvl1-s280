// 5 point
import { welcomeMessage, getName, getAnswer } from '..';

const braincalculator = () => {
  welcomeMessage();
  console.log('What is the result of the expression?\n');
  // taskMessage('braincalculator');
  const playerName = getName();
  getAnswer('braincalculator', playerName);
};

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

export { braincalculator, getOpResult };
