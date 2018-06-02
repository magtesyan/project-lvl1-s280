// 4 point
import { welcomeMessage, taskMessage, getName, getAnswer } from './index';

const braineven = () => {
  welcomeMessage();
  taskMessage('braineven');
  const playerName = getName();
  getAnswer('braineven', playerName);
};

export default braineven;
