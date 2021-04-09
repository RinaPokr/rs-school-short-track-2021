/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const res = [];
  for (let i = 0; i < matrix.length; i++) {
    res[i] = [];
    for (let j = 0; j < matrix[i].length; j++) {
      let mines = (-1) * Number(matrix[i][j]);
      for (let ii = Math.max(0, i - 1); ii < Math.min(i + 2, matrix.length); ii++) {
        for (let jj = Math.max(0, j - 1); jj < Math.min(j + 2, matrix[i].length); jj++) {
          mines += Number(matrix[ii][jj]);
        }
      }
      res[i][j] = mines;
    }
  }
  return res;
}

module.exports = minesweeper;
