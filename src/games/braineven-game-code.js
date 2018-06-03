// 4 point
import engine from '..';

const braineven = () => {
  const task = ('Answer "yes" if number even otherwise answer "no".');
  engine(task, 'brainceven');
};

// IsEven
const isEven = (digit) => {
  if (digit % 2 === 0) return 'yes';
  return 'no';
};

export { braineven, isEven };
