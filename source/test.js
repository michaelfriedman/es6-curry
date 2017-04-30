import test from 'tape';
import { add2, add3, inc } from './index';

// What is currying?
/* =======================
  A curried function takes multiple parameters, but takes them sequentially (one at a time) and
  returns a new function to take the next argument
*/
test('add2(a) => b => Number', (assert) => {
  const msg = 'should take two numbers and return the sum';

  const actual = add2(1)(2);
  const expected = 3;

  assert.same(actual, expected, msg);
  assert.same(add2(2)(3), 5, msg);
  assert.end();
});

// What is partial Application?
 /*
     * Partial application fixes the initial arguments to the closure, then waits for more arguments
        before it is fully applied to the function

    * The difference between curry and partial application is that partial application
      is a function that takes multiple arguments in various permutations and when called will
      return a function with fewer arguments
  */
  // add3(a) => b = c => Number
test('add3(a) => b = c => Number', (assert) => {
  const msg = 'should auto-curry arguments and return the sum';

  const expected = 6;

  assert.same(add3(1, 2, 3), expected, msg);
  assert.same(add3(1)(2)(3), expected, msg);
  assert.same(add3(1)(2, 3), expected, msg);
  assert.same(add3(1, 2)(3), expected, msg);

  assert.end();
});

// What is point-free style?
/* point-free style is a method for creating functions without
  referencing the arguments that the function uses */
// inc(n) => Number
test('inc(n) => Number', (assert) => {
  const msg = 'should take number a and return a + 1';

  const actual = inc(4);

  const expected = 5;

  assert.same(actual, expected, msg);

  assert.end();
});
