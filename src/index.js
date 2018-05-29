import readlineSync from 'https://rawgit.com/anseki/readline-sync/master/lib/readline-sync.js';

const name = () => {
	const imya = readlineSync.question('Welcome to the Brain Games!\n\nMay I have your name? ');
	console.log('Hello, ' + imya);
}

export default name;