/**
 * Corresponds to tsconfig.json paths or webpack aliases
 * E.g. "@/app/store/AppStore" -> "./src/app/store/AppStore"
 */
const pathMapping = {
  "ice": "./.ice",
  "@/": './src/',
};

const replacePathAlias = require("./replace-path-alias");

module.exports = function transform(file, api) {
  const j = api.jscodeshift;
  const root = j(file.source);

  root.find(j.ImportDeclaration).forEach(replaceNodepathAliases);
  root.find(j.ExportAllDeclaration).forEach(replaceNodepathAliases);

  /**
   * Filter out normal module exports, like export function foo(){ ...}
   * Include export {a} from "mymodule" etc.
   */
  root
    .find(j.ExportNamedDeclaration, (node) => node.source !== null)
    .forEach(replaceNodepathAliases);

  return root.toSource();

  function replaceNodepathAliases(impExpDeclNodePath) {
    impExpDeclNodePath.value.source.value = replacePathAlias(
      file.path,
      impExpDeclNodePath.value.source.value,
      pathMapping
    );
  }
};