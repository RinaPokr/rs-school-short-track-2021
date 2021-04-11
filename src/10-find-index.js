/**
 * Given a sorted array, find the index of the element with the given value.
 * Time complexity should be O(logN)
 *
 * @param {Array} array
 * @param {Number} value
 * @return {Number}
 *
 * @example
 * For ([1, 2, 3], 1) should return 0
 * For ([1, 2, 3], 2) should return 1
 *
 */
function findIndex(array, value) {
  let res;
  let indexMax = array.length - 1;
  let indexMin = 0;
  let index = 0;
  if (array[indexMax] === value) {
    res = indexMax;
  } else if (array[indexMin] === value) {
    res = indexMin;
  } else {
    while (array[index] !== value) {
      index = Math.floor((indexMax - indexMin) / 2);
      if (array[index] > value) {
        indexMax = index;
      } else if (array[index] < value) {
        indexMin = index;
      } else {
        res = index;
      }
    }
  }
  return res;
}

module.exports = findIndex;
