import readlineSync from 'readline-sync';
import getRandomDigit from './utils';

// WelcomeMessage - Welcome to the Brain Games!
const welcomeMessage = () => console.log('Welcome to the Brain Games!');

// TaskMessage
const taskMessage = (game) => {
  if (game === 'braineven') console.log('Answer "yes" if number even otherwise answer "no".\n');
  if (game === 'calculator') console.log('What is the result of the expression?\n');
};

// AskingName
const getName = () => {
  const playerName = readlineSync.question('May I have your name? ');
  console.log(`Hello ${playerName}!\n`);
  return playerName;
};

// IsEven
const isEven = (digit) => {
  if (digit % 2 === 0) return 'yes';
  return 'no';
};

// GetQuestion
const getQuestion = (game, digit1, digit2, operator) => {
  if (game === 'braineven') console.log(`Question: ${digit1}`);
  if (game === 'calculator') console.log(`Question: ${digit1} ${operator} ${digit2}`);
};

// GetAnswer
const getAnswer = (game, playerName) => {
  for (let counter = 0; counter < 3; counter += 1) {
    let correctAnswer = '';
    let operator = '';
    const digit1 = getRandomDigit();
    const digit2 = getRandomDigit();
    const digit3 = getRandomDigit();
    if (game === 'braineven') correctAnswer += isEven(digit1);
    if (game === 'calculator') {
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
    }
    getQuestion(game, digit1, digit2, operator);
    const answer = readlineSync.question('Your answer: ');
    if (answer !== correctAnswer) return console.log(`${answer} is wrong answer ;(. Correct answer was ${correctAnswer}`);
    console.log('Correct!\n');
  }
  return console.log(`Congratulations, ${playerName}!`);
};

export { welcomeMessage, taskMessage, getName, getAnswer };
