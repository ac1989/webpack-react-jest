export const doSomething = thisArg => {
  console.log('I am some side effect function.');
  console.log('I was called with:', thisArg);
};
