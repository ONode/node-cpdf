const cpdf = require('./lib/bin-craft');
const getTemporaryFilePath = require('./lib/tmp-file-craft');

function countPages(filePath) {
  return cpdf('Counting pages', `-pages ${filePath}`)
    .then(out => parseInt(out));
}

function merge(filePaths, output) {
  output = output || getTemporaryFilePath();

  return cpdf('Merging', `${filePaths.join(' ')} -o ${output}`)
    .then(() => output);
}

function split(filePath, dest) {
  return cpdf('Splitting', `-split ${filePath} -o ${dest}`);
}

function write(blankFile, args, output) {
  output = output || getTemporaryFilePath();

  return cpdf('Writing file', `${blankFile} ${args} -o ${output}`)
    .then(() => output);
}
function listBookmarks(filePath) {
  return cpdf('List Bookmark', `-list-bookmarks ${filePath}`)
    .then(print => print);
}
module.exports = {
  countPages,
  merge,
  split,
  write,
  listBookmarks
};
