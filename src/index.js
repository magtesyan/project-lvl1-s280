import readlineSync from 'readline-sync';

const name = () => {
  const name0 = readlineSync.question('Welcome to the Brain Games!\n\nMay I have your name? ');
  console.log(`Hello, ${name0}`);
};


const braineven = (counter) => {
  let counter1 = 0;
  const name1 = readlineSync.question('Welcome to the Brain Games!\n\nMay I have your name? ');
  const rnd = Math.random();
  let correctanswer = '';
  console.log(`Question: ${rnd}`);
  const answer = readlineSync.question('\nYour answer: ');
  if (rnd % 2 === 0) correctanswer += 'yes';
  else correctanswer += 'no';
  if (correctanswer === answer) {
    if (counter === 2) {
      console.log(`Congratulations, ${name1}`);
      return true;
    }
    console.log('Correct!');
    counter1 += 1;
    braineven(counter1);
  } else {
    console.log(`${answer} is wrong answer ;(. Correct answer was ${correctanswer}\nLet's try again, ${name1}`);
    return false;
  }
  return true;
};

export { braineven, name };
