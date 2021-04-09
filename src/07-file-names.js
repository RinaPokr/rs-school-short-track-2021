/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  const repit = {};
  const res = [];
  if (names.length !== 0) {
    res.push(names[0]);
    for (let i = 1; i < names.length; i++) {
      const name = names[i];
      if (res.includes(name)) {
        if (name in repit) {
          repit[name]++;
          res.push(`${name}(${repit[name].toString()})`);
        } else {
          repit[name] = 1;
          res.push(`${name}(1)`);
        }
      } else {
        res.push(name);
      }
    }
  }
  return res;
}

module.exports = renameFiles;
