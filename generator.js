const pluginDeps = require("./package.json").dependencies;
const pluginPeerDeps = require("./package.json").peerDependencies;

module.exports = (API) => {
  return API.extendPackage({
    devDependencies: {
      "coffee-loader": pluginDeps["coffee-loader"],
      coffeescript: pluginPeerDeps.coffeescript,
    },
  });
};
