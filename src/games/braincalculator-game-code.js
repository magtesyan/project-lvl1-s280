// 5 point
import { welcomeMessage, taskMessage, getName, getAnswer } from '..';

const braincalculator = () => {
  welcomeMessage();
  taskMessage('braincalculator');
  const playerName = getName();
  getAnswer('braincalculator', playerName);
};

export default braincalculator;
