// 2 point
import readlineSync from 'readline-sync';

const brainname = () => {
  const name0 = readlineSync.question('Welcome to the Brain Games!\n\nMay I have your name? ');
  console.log(`Hello, ${name0}`);
};

export default brainname;
