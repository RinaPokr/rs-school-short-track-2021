/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let res = '';
  let letter;
  let count;
  let i = 0;
  while (i < str.length) {
    letter = str[i];
    count = 1;
    i++;
    while (str[i] === letter) {
      count++;
      i++;
    }
    res += (count > 1) ? `${count}${letter}` : letter;
  }
  return res;
}

module.exports = encodeLine;
