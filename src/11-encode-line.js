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
  const arr = [];

  for (let i = 0; i < str.length; i++) {
    let count = 1;
    while (str[i + 1] === str[i]) {
      count++;
      i++;
    }
    if (count > 1) {
      arr.push(count, str[i]);
    } else if (count === 1) {
      arr.push(str[i]);
    }
  }
  return arr.join('');
}

module.exports = encodeLine;
