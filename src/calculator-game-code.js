// 5 point
import { welcomeMessage, taskMessage, getName, getAnswer } from './index';

const calculator = () => {
  welcomeMessage();
  taskMessage('calculator');
  const playerName = getName();
  getAnswer('calculator', playerName);
};

export default { calculator };
