module.exports = (API, projectOptions) => {
  API.chainWebpack((config) => {
    config.resolveLoader.modules.prepend(path.join(__dirname, "node_modules"));

    config.resolve.extensions.prepend(".coffee");

    if (!projectOptions.pages) {
      config.entry("app").clear().add("./src/main.coffee");
    }

    const coffeeRule = config.module.rule("coffee").test(/\.coffee$/);

    coffeeRule.use("cache-loader").loader(require.resolve("cache-loader"));

    coffeeRule.use("coffee-loader").loader(require.resolve("coffee-loader"));
  });
};
