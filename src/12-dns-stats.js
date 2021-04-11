/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const res = {};
  let el;
  if (domains.length > 0) {
    const domainsArr = [];
    domains.forEach((element) => {
      domainsArr.push(element.split('.'));
    });
    for (let i = 0; i < domains.length; i++) {
      const domain = domainsArr[i];
      for (let j = 0; j < domain.length; j++) {
        el = `.${domain.slice(-j).reverse().join('.')}`;
        if (el in res) {
          res[el]++;
        } else {
          res[el] = 1;
        }
      }
    }
  }
  return res;
}

module.exports = getDNSStats;
