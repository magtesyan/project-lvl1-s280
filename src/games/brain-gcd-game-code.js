// 6 point
import { welcomeMessage, getName, getAnswer } from '..';

const braingcd = () => {
  welcomeMessage();
  console.log('Find the greatest common divisor of given numbers.\n');
  // taskMessage('braingcd');
  const playerName = getName();
  getAnswer('braingcd', playerName);
};

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

export { braingcd, getGCD };
