import curry from './curry';

// eslint-disable import/prefer-default-export
export const add2 = a => b => a + b;
export const add3 = curry((a, b, c) => a + b + c);
export const inc = add2(1);
