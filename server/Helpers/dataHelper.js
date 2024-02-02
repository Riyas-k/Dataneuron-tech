let count = 0;

export const incrementCount = () => {
  count++;
};

export const getCount = () => {
  console.log(count);
  return count;
};
