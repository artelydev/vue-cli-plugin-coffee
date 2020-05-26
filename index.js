module.exports = function (API) {
  return API.configureWebpack(function () {
    return {
      resolve: {
        extensions: [".coffee"],
      },
      module: {
        rules: [
          {
            test: /\.coffee$/,
            loader: "coffee-loader",
          },
        ],
      },
    };
  });
};
