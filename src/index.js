import readlineSync from 'readline-sync';

const name = () => {
  const name0 = readlineSync.question('Welcome to the Brain Games!\n\nMay I have your name? ');
  console.log(`Hello, ${name0}`);
};


const braineven = (counter, name2) => {
  let counter1 = counter;
  const rnd = Math.round(Math.random() * 100);
  let correctanswer = '';
  console.log(`Question: ${rnd}`);
  const answer = readlineSync.question('\nYour answer: ');
  if (rnd % 2 === 0) correctanswer += 'yes';
  else correctanswer += 'no';
  if (correctanswer === answer) {
    if (counter === 2) {
      console.log(`Congratulations, ${name2}`);
      return true;
    }
    console.log('Correct!');
    counter1 += 1;
    braineven(counter1, name2);
  } else {
    console.log(`${answer} is wrong answer ;(. Correct answer was ${correctanswer}\nLet's try again, ${name2}`);
    return false;
  }
  return true;
};

export { braineven, name };
