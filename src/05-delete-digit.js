/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const array = n.toString().split('');
  const minDigital = String(Math.min(...array));
  const index = array.indexOf(minDigital);
  array.splice(index, 1);

  return Number(array.join(''));
}

module.exports = deleteDigit;
