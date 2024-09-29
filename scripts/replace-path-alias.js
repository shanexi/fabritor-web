const path = require("path");

function replacePathAlias(currentFilePath, importPath, pathMap) {
  // if windows env, convert backslashes to "/" first
  currentFilePath = path.posix.join(...currentFilePath.split(path.sep));

  const regex = createRegex(pathMap);
  return importPath.replace(regex, replacer);

  function replacer(_, alias, rest) {
    const mappedImportPath = pathMap[alias] + rest;

    // use path.posix to also create foward slashes on windows environment
    let mappedImportPathRelative = path.posix.relative(
      path.dirname(currentFilePath),
      mappedImportPath
    );
    // append "./" to make it a relative import path
    if (!mappedImportPathRelative.startsWith("../")) {
      mappedImportPathRelative = `./${mappedImportPathRelative}`;
    }

    logReplace(currentFilePath, mappedImportPathRelative);

    return mappedImportPathRelative;
  }
}

function createRegex(pathMap) {
  const mapKeysStr = Object.keys(pathMap).reduce((acc, cur) => `${acc}|${cur}`);
  const regexStr = `^(${mapKeysStr})(.*)$`;
  return new RegExp(regexStr, "g");
}

const log = true;
function logReplace(currentFilePath, mappedImportPathRelative) {
  if (log)
    console.log(
      "current processed file:",
      currentFilePath,
      "; Mapped import path relative to current file:",
      mappedImportPathRelative
    );
}

module.exports = replacePathAlias;