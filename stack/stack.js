export const stack = () => {
  const stackArray = [];

  return {
    push: (newValue) => {
      stackArray.push(newValue);
    },
    pop: () => {
      stackArray.pop();
    },
    peek: () => {
      return stackArray[stackArray.length - 1];
    },
    length: () => {
      return stackArray.length;
    },
    isEmpty: () => {
      return stackArray.length === 0;
    },
  };
};
