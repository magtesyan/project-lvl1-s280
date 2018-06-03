import readlineSync from 'readline-sync';
import getRandomDigit from './utils';
import { isEven } from './games/braineven-game-code';
import { getOpResult } from './games/braincalculator-game-code';
import { getGCD } from './games/brain-gcd-game-code';
import { getBalance } from './games/brainbalance-game-code';

// GetQuestion
const getQuestion = (game, digit1, digit2, operator) => {
  if (game === 'braineven' || game === 'brainbalance') console.log(`Question: ${digit1}`);
  if (game === 'braincalculator') console.log(`Question: ${digit1} ${operator} ${digit2}`);
  if (game === 'braingcd') console.log(`Question: ${digit1} ${digit2}`);
};

const engine = (taskMessage, game) => {
  console.log(`Welcome to the Brain Games!\n${taskMessage}\n`);
  const playerName = readlineSync.question('May I have your name? ');
  console.log(`Hello ${playerName}!\n`);

  for (let counter = 0; counter < 3; counter += 1) {
    let operator = '';
    let correctAnswer = '';
    const digit1 = getRandomDigit();
    const digit2 = getRandomDigit();
    const digit3 = getRandomDigit();
    if (game === 'braineven') correctAnswer += isEven(digit1);
    if (game === 'braincalculator') {
      correctAnswer += getOpResult(digit1, digit2, digit3)[0];
      operator += getOpResult(digit1, digit2, digit3)[1];
    }
    if (game === 'braingcd') correctAnswer += getGCD(digit1, digit2);
    if (game === 'brainbalance') correctAnswer += getBalance(digit1);
    getQuestion(game, digit1, digit2, operator);
    const answer = readlineSync.question('Your answer: ');
    if (answer !== correctAnswer) return console.log(`${answer} is wrong answer ;(. Correct answer was ${correctAnswer}`);
    console.log('Correct!\n');
  }
  return console.log(`Congratulations, ${playerName}!`);
};


export default { engine };
