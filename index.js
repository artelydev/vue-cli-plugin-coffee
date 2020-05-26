module.exports = (API) => {
  API.chainWebpack((config) => {
    const coffeeRule = config.module.rule("coffee").test(/\.coffee$/);

    coffeeRule.use("cache-loader").loader(require.resolve("cache-loader"));

    coffeeRule.use("coffee-loader").loader(require.resolve("coffee-loader"));
  });
};
