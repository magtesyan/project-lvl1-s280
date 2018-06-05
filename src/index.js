import readlineSync from 'readline-sync';

const engine = (taskMessage, startRound) => {
  const roundsQuantity = 3;
  console.log('Welcome to the Brain Games!\n');
  console.log(`${taskMessage}\n`);
  const playerName = readlineSync.question('May I have your name? ');
  console.log(`Hello ${playerName}!\n`);

  for (let counter = 0; counter < roundsQuantity; counter += 1) {
    const gameParameters = startRound();
    const question = gameParameters[0];
    const correctAnswer = gameParameters[1];
    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');
    if (answer !== correctAnswer) return console.log(`${answer} is wrong answer ;(. Correct answer was ${correctAnswer}`);
    console.log('Correct!\n');
  }
  console.log(`Congratulations, ${playerName}!`);
  return undefined;
};

export default engine;
