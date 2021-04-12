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
  let startIndex = 0;
  let endIndex = array.length - 1;
  let res = 0;

  while (startIndex <= endIndex) {
    const middleIndex = Math.floor((startIndex + endIndex) / 2);
    const middleValue = array[middleIndex];
    if (value < middleValue) {
      endIndex = middleIndex - 1;
    } else if (value > middleValue) {
      startIndex = middleIndex + 1;
    } else {
      res = middleIndex;
      return middleIndex;
    }
  }
  return res;
}

module.exports = findIndex;
