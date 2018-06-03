import readlineSync from 'readline-sync';

const engine = (taskMessage, question, correctAnswer) => {
  console.log(`Welcome to the Brain Games!\n${taskMessage}\n`);
  const playerName = readlineSync.question('May I have your name? ');
  console.log(`Hello ${playerName}!\n`);

  for (let counter = 0; counter < 3; counter += 1) {
    console.log(question[counter]);
    const answer = readlineSync.question('Your answer: ');
    if (answer !== correctAnswer[counter]) return console.log(`${answer} is wrong answer ;(. Correct answer was ${correctAnswer[counter]}`);
    console.log('Correct!\n');
  }
  return console.log(`Congratulations, ${playerName}!`);
};


export default engine;
