import readlineSync from 'readline-sync';
import getRandomDigit from './utils';
import { isEven } from './games/braineven-game-code';
import { getOpResult } from './games/braincalculator-game-code';
import { getGCD } from './games/brain-gcd-game-code';

// WelcomeMessage - Welcome to the Brain Games!
const welcomeMessage = () => console.log('Welcome to the Brain Games!');

// TaskMessage
const taskMessage = (game) => {
  if (game === 'braineven') console.log('Answer "yes" if number even otherwise answer "no".\n');
  if (game === 'braincalculator') console.log('What is the result of the expression?\n');
  if (game === 'braingcd') console.log('Find the greatest common divisor of given numbers.\n');
};

// AskingName
const getName = () => {
  const playerName = readlineSync.question('May I have your name? ');
  console.log(`Hello ${playerName}!\n`);
  return playerName;
};

// GetQuestion
const getQuestion = (game, digit1, digit2, operator) => {
  if (game === 'braineven') console.log(`Question: ${digit1}`);
  if (game === 'braincalculator') console.log(`Question: ${digit1} ${operator} ${digit2}`);
  if (game === 'braingcd') console.log(`Question: ${digit1} ${digit2}`);
};

// GetAnswer
const getAnswer = (game, playerName) => {
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
    getQuestion(game, digit1, digit2, operator);
    const answer = readlineSync.question('Your answer: ');
    if (answer !== correctAnswer) return console.log(`${answer} is wrong answer ;(. Correct answer was ${correctAnswer}`);
    console.log('Correct!\n');
  }
  return console.log(`Congratulations, ${playerName}!`);
};

export { welcomeMessage, taskMessage, getName, getAnswer };
