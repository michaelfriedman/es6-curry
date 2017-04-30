// Tiny, recursive autocurry
const curry = (
  f, arr = [],
) => (...args) => (
  // eslint-disable-next-line no-confusing-arrow
  a => a.length === f.length ?
    f(...a) :
    curry(f, a)
)([...arr, ...args]);

export default curry;
