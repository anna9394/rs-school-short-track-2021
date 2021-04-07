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
  const splitted2 = s2.split('');

  return s1.split('').filter((value) => {
    if (splitted2.includes(value)) {
      const idx = splitted2.findIndex((el) => el === value);
      splitted2.splice(idx, 1);

      return value;
    }

    return null;
  }).length;
}

module.exports = getCommonCharacterCount;
