// 4 point
import { welcomeMessage, taskMessage, getName, getAnswer } from '..';

const braineven = () => {
  welcomeMessage();
  taskMessage('braineven');
  const playerName = getName();
  getAnswer('braineven', playerName);
};

// IsEven
const isEven = (digit) => {
  if (digit % 2 === 0) return 'yes';
  return 'no';
};

export { braineven, isEven };
