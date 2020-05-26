module.exports = (API) => {
  return API.extendPackage({
    devDependencies: {
      coffeescript: require("./package.json").peerDependencies.coffeescript,
    },
  });
};
