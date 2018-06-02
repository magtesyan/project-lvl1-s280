// 6 point
import { welcomeMessage, taskMessage, getName, getAnswer } from './index';

const braingcd = () => {
  welcomeMessage();
  taskMessage('braingcd');
  const playerName = getName();
  getAnswer('braingcd', playerName);
};

export default braingcd;
