/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
  const domain = /@[-\w]+.\w+(?:.\w+)?.*/i;
  return email.match(domain)[0].slice(1);
}

module.exports = getEmailDomain;
