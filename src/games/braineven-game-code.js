// 4 point
import { welcomeMessage, getName, getAnswer } from '..';

const braineven = () => {
  welcomeMessage();
  console.log('Answer "yes" if number even otherwise answer "no".\n');
  // taskMessage('braineven');
  const playerName = getName();
  getAnswer('braineven', playerName);
};

// IsEven
const isEven = (digit) => {
  if (digit % 2 === 0) return 'yes';
  return 'no';
};

export { braineven, isEven };
