/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2], // [false, false, false, false]
 *  [0, 5, 0, 0], // [true, false, false, false]
 *  [2, 0, 3, 3]  // [true, false, true, true]
 * ]              // [false, true, false, false]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  const indexes = new Array(matrix[0].length).fill(false);
  let result = 0;

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (!indexes[j]) {
        result += matrix[i][j];
      }

      if (matrix[i][j] === 0) {
        indexes[j] = true;
      } else {
        indexes[j] = false;
      }
    }
  }

  return result;
}

module.exports = getMatrixElementsSum;
