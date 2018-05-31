import readlineSync from 'readline-sync';

// 2 point
const name = () => {
  const name0 = readlineSync.question('Welcome to the Brain Games!\n\nMay I have your name? ');
  console.log(`Hello, ${name0}`);
};

// WelcomeMessage - Welcome to the Brain Games!
const welcomeMessage = () => console.log('Welcome to the Brain Games!');

// TaskMessage
const taskMessage = (game) => {
  if (game === 'braineven') console.log('Answer "yes" if number even otherwise answer "no".\n');
};

// AskingName
const getName = () => {
  const playerName = readlineSync.question('May I have your name? ');
  console.log(`Hello ${playerName}!\n`);
  return playerName;
};

// RandomDigit
const randomDigit = () => Math.round(Math.random() * 100);

// IsEven
const isEven = (digit) => {
  if (digit % 2 === 0) return 'yes';
  return 'no';
};

// GetQuestion
const getQuestion = (game, digit1) => {
  if (game === 'braineven') console.log(`Question: ${digit1}`);
};

// GetAnswer
const getAnswer = (game, playerName) => {
  for (let counter = 0; counter < 3; counter += 1) {
    let correctAnswer = '';
    const digit1 = randomDigit();
    if (game === 'braineven') correctAnswer += isEven(digit1);
    getQuestion(game, digit1);
    const answer = readlineSync.question('Your answer: ');
    if (answer !== correctAnswer) return console.log(`${answer} is wrong answer ;(. Correct answer was ${correctAnswer}`);
    console.log('Correct!\n');
  }
  return console.log(`Congratulations, ${playerName}!`);
};

// 4 point
const braineven = () => {
  welcomeMessage();
  taskMessage('braineven');
  const playerName = getName();
  getAnswer('braineven', playerName);
};

export { braineven, name };
