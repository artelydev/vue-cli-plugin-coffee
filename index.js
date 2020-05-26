const path = require("path");

module.exports = (API, projectOptions) => {
  API.chainWebpack((config) => {
    config.resolveLoader.modules.prepend(path.join(__dirname, "node_modules"));

    config.resolve.extensions.prepend(".coffee");

    const coffeeRule = config.module.rule("coffee").test(/\.coffee$/);

    coffeeRule.use("cache-loader").loader(require.resolve("cache-loader"));

    if (process.env.NODE_ENV === "production" && !!projectOptions.parallel) {
      coffeeRule
        .use("thread-loader")
        .loader(require.resolve("thread-loader"))
        .options(
          typeof projectOptions.parallel === "number" ? { workers: projectOptions.parallel } : {},
        );
    }

    if (API.hasPlugin("babel")) {
      coffeeRule.use("babel-loader").loader(require.resolve("babel-loader"));
    }

    coffeeRule.use("coffee-loader").loader(require.resolve("coffee-loader"));
  });
};
