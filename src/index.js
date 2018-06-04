import readlineSync from 'readline-sync';

const engine = (taskMessage, startRound) => {
  console.log(`Welcome to the Brain Games!\n${taskMessage}\n`);
  const playerName = readlineSync.question('May I have your name? ');
  console.log(`Hello ${playerName}!\n`);

  for (let counter = 0; counter < 3; counter += 1) {
    const gameParameters = [];
    gameParameters[0] = startRound();
    gameParameters[1] = startRound();
    console.log(gameParameters[0]);
    const answer = readlineSync.question('Your answer: ');
    if (answer !== gameParameters[1]) return console.log(`${answer} is wrong answer ;(. Correct answer was ${gameParameters[1]}`);
    console.log('Correct!\n');
  }
  return console.log(`Congratulations, ${playerName}!`);
};


export default engine;
