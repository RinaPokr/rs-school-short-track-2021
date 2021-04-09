/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let sShort;
  let sLong;
  let index;
  let res = 0;
  if (s1.length > s2.length) {
    sShort = s2;
    sLong = s1;
  } else {
    sShort = s1;
    sLong = s2;
  }
  if (sShort.length !== 0) {
    for (let i = 0; i < sShort.length; i++) {
      index = sLong.indexOf(sShort[i]);
      if (index >= 0) {
        res++;
        sLong = sLong.slice(0, index) + sLong.slice(index + 1);
      }
    }
  }
  return res;
}

module.exports = getCommonCharacterCount;
