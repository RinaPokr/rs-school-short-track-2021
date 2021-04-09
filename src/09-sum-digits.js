/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  let m = n;
  while (m > 9) {
    let sum = 0;
    while (m / 10 > 0) {
      sum += m % 10;
      m = Math.floor(m / 10);
    }
    m = sum;
  }
  return m;
}

module.exports = getSumOfDigits;
