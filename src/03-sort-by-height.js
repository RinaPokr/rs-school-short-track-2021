/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const arr2 = arr.slice().filter((item) => item !== -1).sort((a, b) => a - b);
  const res = [];
  let i = 0;
  for (let index = 0; index < arr.length; index++) {
    if (arr[index] !== -1) {
      res[index] = arr2[i];
      i++;
    } else {
      res[index] = -1;
    }
  }
  return res;
}

module.exports = sortByHeight;
