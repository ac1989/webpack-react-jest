/**
 * Returns the sum of all numbers passed as arguments
 * @param {...number} args
 * @returns {(number|null)} Null if no arguments
 */
export const sum = (...args) => {
  if (args.length === 0) return null;
  return args.reduce((sum, n) => sum + n, 0);
};
