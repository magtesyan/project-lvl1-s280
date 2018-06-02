// 5 point
import { welcomeMessage, taskMessage, getName, getAnswer } from './index';

const braincalculator = () => {
  welcomeMessage();
  taskMessage('braincalculator');
  const playerName = getName();
  getAnswer('braincalculator', playerName);
};

export default braincalculator;
